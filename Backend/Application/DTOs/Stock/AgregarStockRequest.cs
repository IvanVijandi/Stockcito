namespace Application.DTOs.Stock;

public class AgregarStockRequest
{
    public Guid ProductoId { get; set; }
    public int Unidades { get; set; }
    public string? Razon { get; set; }
}

