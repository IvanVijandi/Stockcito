using Application.DTOs.Stock;
using Application.Ports.Repositories;
using Domain.Entities;
using Domain.Enums;
using Domain.ValueObjects;

namespace Application.UseCases.Stock;

public class AgregarStockUseCase : IAgregarStockUseCase
{
    private readonly IRepositorioProducto _repositorioProducto;
    private readonly IRepositorioMovimientoStock _repositorioMovimientoStock;

    public AgregarStockUseCase(IRepositorioProducto repositorioProducto, IRepositorioMovimientoStock repositorioMovimientoStock)
    {
        _repositorioProducto = repositorioProducto;
        _repositorioMovimientoStock = repositorioMovimientoStock;
    }

    public async Task EjecutarAsync(AgregarStockRequest request, CancellationToken cancellationToken = default)
    {
        var productId = new ProductId(request.ProductoId);
        var producto = await _repositorioProducto.ObtenerPorIdAsync(productId, cancellationToken);

        if (producto == null)
        {
            throw new Exception($"Producto con id {request.ProductoId} no encontrado");
        }

        producto.AgregarStock(request.Unidades);

        var stockMovement = StockMovement.Record(
            productId,
            MovementType.Entry,
            new Quantity(request.Unidades),
            request.Razon
        );

        await _repositorioMovimientoStock.AgregarAsync(stockMovement, cancellationToken);
        await _repositorioProducto.ActualizarAsync(producto, cancellationToken);
    }
}

