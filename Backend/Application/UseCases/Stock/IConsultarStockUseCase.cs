using Application.DTOs.Stock;

namespace Application.UseCases.Stock;

public interface IConsultarStockUseCase
{
    Task<ConsultarStockResponse> EjecutarAsync(ConsultarStockRequest request, CancellationToken cancellationToken = default);
}

