using Application.DTOs.Stock;

namespace Application.UseCases.Stock;

public interface IAgregarStockUseCase
{
    Task EjecutarAsync(AgregarStockRequest request, CancellationToken cancellationToken = default);
}

