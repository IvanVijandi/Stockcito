using Domain.Entities;

namespace Application.Ports.Repositories;

public interface IRepositorioMovimientoStock
{
    Task AgregarAsync(StockMovement movimientoStock, CancellationToken cancellationToken = default);
}

