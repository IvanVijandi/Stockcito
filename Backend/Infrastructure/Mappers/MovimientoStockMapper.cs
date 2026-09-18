using Domain.Entities;
using Domain.Enums;
using Domain.ValueObjects;
using Infrastructure.Models;

namespace Infrastructure.Mappers;

public static class MovimientoStockMapper
{
    public static MovimientoStockModel ToModel(StockMovement dominio)
    {
        return new MovimientoStockModel
        {
            Id = dominio.Id.Value,
            ProductoId = dominio.ProductId.Value,
            Tipo = dominio.Type.ToString(),
            Unidades = dominio.Units.Value,
            Razon = dominio.Reason,
            OcurridoEn = dominio.OccurredAt
        };
    }

    public static StockMovement ToDomain(MovimientoStockModel modelo)
    {
        return StockMovement.Reconstituir(
            new StockMovementId(modelo.Id),
            new ProductId(modelo.ProductoId),
            Enum.Parse<MovementType>(modelo.Tipo),
            new Quantity(modelo.Unidades),
            modelo.Razon,
            modelo.OcurridoEn
        );
    }
}

