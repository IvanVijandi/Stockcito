using Domain.Common;
using Domain.ValueObjects;

namespace Domain.Events;

public class ProductoCreado : IDomainEvent
{
    public ProductId ProductoId { get; }
    public ProductName Nombre { get; }
    public SKU Sku { get; }
    public Money Precio { get; }
    public DateTime OcurridoEn { get; }

    public ProductoCreado(ProductId productoId, ProductName nombre, SKU sku, Money precio)
    {
        ProductoId = productoId;
        Nombre = nombre;
        Sku = sku;
        Precio = precio;
        OcurridoEn = DateTime.UtcNow;
    }
}
