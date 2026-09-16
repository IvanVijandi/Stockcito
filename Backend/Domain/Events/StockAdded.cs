using Domain.Common;
using Domain.ValueObjects;

namespace Domain.Events;

public class StockAgregado : IDomainEvent
{
    public ProductId ProductoId { get; }
    public Quantity UnidadesAgregadas { get; }
    public Quantity StockActual { get; }
    public DateTime OcurridoEn { get; }

    public StockAgregado(ProductId productoId, Quantity unidadesAgregadas, Quantity stockActual)
    {
        ProductoId = productoId;
        UnidadesAgregadas = unidadesAgregadas;
        StockActual = stockActual;
        OcurridoEn = DateTime.UtcNow;
    }
}
