using Domain.Common;
using Domain.ValueObjects;

namespace Domain.Events;

public class StockAgotado : IDomainEvent
{
    public ProductId ProductoId { get; }
    public DateTime OcurridoEn { get; }

    public StockAgotado(ProductId productoId)
    {
        ProductoId = productoId;
        OcurridoEn = DateTime.UtcNow;
    }
}
