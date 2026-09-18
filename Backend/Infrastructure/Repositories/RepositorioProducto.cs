using Application.Ports.Repositories;
using Domain.Entities;
using Domain.ValueObjects;
using Infrastructure.Data;
using Infrastructure.Mappers;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Repositories;

public class RepositorioProducto : IRepositorioProducto
{
    private readonly StockcitoDbContext _context;

    public RepositorioProducto(StockcitoDbContext context)
    {
        _context = context;
    }

    public async Task<Product?> ObtenerPorIdAsync(ProductId id, CancellationToken cancellationToken = default)
    {
        var modelo = await _context.Productos
            .AsNoTracking()
            .FirstOrDefaultAsync(p => p.Id == id.Value, cancellationToken);

        if (modelo == null) return null;

        return ProductoMapper.ToDomain(modelo);
    }

    public async Task AgregarAsync(Product producto, CancellationToken cancellationToken = default)
    {
        var modelo = ProductoMapper.ToModel(producto);
        await _context.Productos.AddAsync(modelo, cancellationToken);
        await _context.SaveChangesAsync(cancellationToken);
    }

    public async Task ActualizarAsync(Product producto, CancellationToken cancellationToken = default)
    {
        var modelo = ProductoMapper.ToModel(producto);
        _context.Productos.Update(modelo);
        await _context.SaveChangesAsync(cancellationToken);
    }
}

