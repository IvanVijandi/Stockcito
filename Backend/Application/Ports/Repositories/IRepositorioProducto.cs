using Domain.Entities;
using Domain.ValueObjects;

namespace Application.Ports.Repositories;

public interface IRepositorioProducto
{
    Task<Product?> ObtenerPorIdAsync(ProductId id, CancellationToken cancellationToken = default);
    Task AgregarAsync(Product producto, CancellationToken cancellationToken = default);
    Task ActualizarAsync(Product producto, CancellationToken cancellationToken = default);
}

