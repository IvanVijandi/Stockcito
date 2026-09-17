using Application.DTOs.Productos;
using Application.UseCases.Productos;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProductosController : ControllerBase
{
    private readonly IAgregarProductoUseCase _agregarProductoUseCase;

    public ProductosController(IAgregarProductoUseCase agregarProductoUseCase)
    {
        _agregarProductoUseCase = agregarProductoUseCase;
    }

    [HttpPost]
    public async Task<ActionResult<AgregarProductoResponse>> AgregarProducto([FromBody] AgregarProductoRequest request, CancellationToken cancellationToken)
    {
        var response = await _agregarProductoUseCase.EjecutarAsync(request, cancellationToken);
        return Ok(response); // Podría ser CreatedAtAction dependiendo del diseño
    }
}

