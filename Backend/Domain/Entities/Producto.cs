using Domain.Common;
using Domain.Enums;
using Domain.Events;
using Domain.ValueObjects;

namespace Domain.Entities;

public class Product : AggregateRoot
{
    private const int UmbralStockBajo = 10;

    public ProductId Id { get; private set; }
    public ProductName Nombre { get; private set; }
    public SKU Sku { get; private set; }
    public Quantity Stock { get; private set; }
    public Money Precio { get; private set; }
    public StockStatus Estado { get; private set; }
    public DateTime CreadoEn { get; private set; }
    public DateTime ActualizadoEn { get; private set; }

#pragma warning disable CS8618 // EF Core requires a parameterless constructor; all properties are set via the static factory.
    private Product() { }
#pragma warning restore CS8618

    public static Product Crear(ProductName nombre, SKU sku, Money precio, Quantity stockInicial)
    {
        var producto = new Product
        {
            Id = ProductId.New(),
            Nombre = nombre,
            Sku = sku,
            Precio = precio,
            Stock = stockInicial,
            CreadoEn = DateTime.UtcNow,
            ActualizadoEn = DateTime.UtcNow
        };

        producto.Estado = producto.CalcularEstado();
        producto.AddDomainEvent(new ProductoCreado(producto.Id, producto.Nombre, producto.Sku, producto.Precio));

        return producto;
    }

    public static Product Reconstituir(ProductId id, ProductName nombre, SKU sku, Quantity stock, Money precio, StockStatus estado, DateTime creadoEn, DateTime actualizadoEn)
    {
        return new Product
        {
            Id = id,
            Nombre = nombre,
            Sku = sku,
            Stock = stock,
            Precio = precio,
            Estado = estado,
            CreadoEn = creadoEn,
            ActualizadoEn = actualizadoEn
        };
    }

    public void AgregarStock(int unidades)
    {
        var unidadesAgregadas = new Quantity(unidades);
        Stock = Stock.Add(unidades);
        ActualizadoEn = DateTime.UtcNow;
        Estado = CalcularEstado();

        AddDomainEvent(new StockAgregado(Id, unidadesAgregadas, Stock));
    }

    public void RetirarStock(int unidades)
    {
        var unidadesRetiradas = new Quantity(unidades);
        Stock = Stock.Subtract(unidades);
        ActualizadoEn = DateTime.UtcNow;
        Estado = CalcularEstado();

        AddDomainEvent(new StockRetirado(Id, unidadesRetiradas, Stock));

        if (Stock.Value == 0)
        {
            AddDomainEvent(new StockAgotado(Id));
        }
    }

    public void ActualizarPrecio(Money nuevoPrecio)
    {
        Precio = nuevoPrecio;
        ActualizadoEn = DateTime.UtcNow;
    }

    private StockStatus CalcularEstado()
    {
        if (Stock.Value == 0)
            return StockStatus.OutOfStock;

        if (Stock.Value <= UmbralStockBajo)
            return StockStatus.LowStock;

        return StockStatus.InStock;
    }
}
