using Application.Ports.Repositories;
using Domain.Entities;
using Infrastructure.Data;
using Infrastructure.Mappers;

namespace Infrastructure.Repositories;

public class RepositorioMovimientoStock : IRepositorioMovimientoStock
{
    private readonly StockcitoDbContext _context;

    public RepositorioMovimientoStock(StockcitoDbContext context)
    {
        _context = context;
    }

    public async Task AgregarAsync(StockMovement movimientoStock, CancellationToken cancellationToken = default)
    {
        var modelo = MovimientoStockMapper.ToModel(movimientoStock);
        await _context.MovimientosStock.AddAsync(modelo, cancellationToken);
        await _context.SaveChangesAsync(cancellationToken);
    }
}

