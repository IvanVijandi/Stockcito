using Domain.Common;
using Domain.ValueObjects;

namespace Domain.Events;

public class StockRetirado : IDomainEvent
{
    public ProductId ProductoId { get; }
    public Quantity UnidadesRetiradas { get; }
    public Quantity StockActual { get; }
    public DateTime OcurridoEn { get; }

    public StockRetirado(ProductId productoId, Quantity unidadesRetiradas, Quantity stockActual)
    {
        ProductoId = productoId;
        UnidadesRetiradas = unidadesRetiradas;
        StockActual = stockActual;
        OcurridoEn = DateTime.UtcNow;
    }
}
