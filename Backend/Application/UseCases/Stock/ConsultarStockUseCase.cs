using Application.DTOs.Stock;
using Application.Ports.Repositories;
using Domain.ValueObjects;

namespace Application.UseCases.Stock;

public class ConsultarStockUseCase : IConsultarStockUseCase
{
    private readonly IRepositorioProducto _repositorioProducto;

    public ConsultarStockUseCase(IRepositorioProducto repositorioProducto)
    {
        _repositorioProducto = repositorioProducto;
    }

    public async Task<ConsultarStockResponse> EjecutarAsync(ConsultarStockRequest request, CancellationToken cancellationToken = default)
    {
        var productId = new ProductId(request.ProductoId);
        var producto = await _repositorioProducto.ObtenerPorIdAsync(productId, cancellationToken);

        if (producto == null)
        {
            throw new Exception($"Producto con id {request.ProductoId} no encontrado");
        }

        return new ConsultarStockResponse
        {
            Cantidad = producto.Stock.Value,
            Estado = producto.Estado.ToString()
        };
    }
}

