using Application.DTOs.Productos;

namespace Application.UseCases.Productos;

public interface IAgregarProductoUseCase
{
    Task<AgregarProductoResponse> EjecutarAsync(AgregarProductoRequest request, CancellationToken cancellationToken = default);
}

