using Application.DTOs.Productos;
using Application.Ports.Repositories;
using Domain.Entities;
using Domain.ValueObjects;

namespace Application.UseCases.Productos;

public class AgregarProductoUseCase : IAgregarProductoUseCase
{
    private readonly IRepositorioProducto _repositorioProducto;

    public AgregarProductoUseCase(IRepositorioProducto repositorioProducto)
    {
        _repositorioProducto = repositorioProducto;
    }

    public async Task<AgregarProductoResponse> EjecutarAsync(AgregarProductoRequest request, CancellationToken cancellationToken = default)
    {
        var nombre = new ProductName(request.Nombre);
        var sku = new SKU(request.Sku);
        var precio = new Money(request.Precio);
        var stockInicial = new Quantity(request.StockInicial);

        var producto = Product.Crear(nombre, sku, precio, stockInicial);

        await _repositorioProducto.AgregarAsync(producto, cancellationToken);

        return new AgregarProductoResponse
        {
            ProductoId = producto.Id.Value
        };
    }
}

