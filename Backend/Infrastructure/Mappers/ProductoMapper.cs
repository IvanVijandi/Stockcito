using Domain.Entities;
using Domain.Enums;
using Domain.ValueObjects;
using Infrastructure.Models;

namespace Infrastructure.Mappers;

public static class ProductoMapper
{
    public static ProductoModel ToModel(Product dominio)
    {
        return new ProductoModel
        {
            Id = dominio.Id.Value,
            Nombre = dominio.Nombre.Value,
            Sku = dominio.Sku.Value,
            Stock = dominio.Stock.Value,
            Precio = dominio.Precio.Amount,
            Estado = dominio.Estado.ToString(),
            CreadoEn = dominio.CreadoEn,
            ActualizadoEn = dominio.ActualizadoEn
        };
    }

    public static Product ToDomain(ProductoModel modelo)
    {
        return Product.Reconstituir(
            new ProductId(modelo.Id),
            new ProductName(modelo.Nombre),
            new SKU(modelo.Sku),
            new Quantity(modelo.Stock),
            new Money(modelo.Precio),
            Enum.Parse<StockStatus>(modelo.Estado),
            modelo.CreadoEn,
            modelo.ActualizadoEn
        );
    }
}

