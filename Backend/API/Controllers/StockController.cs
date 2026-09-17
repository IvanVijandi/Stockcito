using Application.DTOs.Stock;
using Application.UseCases.Stock;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
public class StockController : ControllerBase
{
    private readonly IAgregarStockUseCase _agregarStockUseCase;
    private readonly IConsultarStockUseCase _consultarStockUseCase;

    public StockController(
        IAgregarStockUseCase agregarStockUseCase,
        IConsultarStockUseCase consultarStockUseCase)
    {
        _agregarStockUseCase = agregarStockUseCase;
        _consultarStockUseCase = consultarStockUseCase;
    }

    [HttpPost]
    public async Task<IActionResult> AgregarStock([FromBody] AgregarStockRequest request, CancellationToken cancellationToken)
    {
        await _agregarStockUseCase.EjecutarAsync(request, cancellationToken);
        return Ok();
    }

    [HttpGet("{productoId:guid}")]
    public async Task<ActionResult<ConsultarStockResponse>> ConsultarStock(Guid productoId, CancellationToken cancellationToken)
    {
        var request = new ConsultarStockRequest { ProductoId = productoId };
        var response = await _consultarStockUseCase.EjecutarAsync(request, cancellationToken);
        
        return Ok(response);
    }
}

