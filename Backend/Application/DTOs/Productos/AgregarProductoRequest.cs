namespace Application.DTOs.Productos;

public class AgregarProductoRequest
{
    public string Nombre { get; set; } = string.Empty;
    public string Sku { get; set; } = string.Empty;
    public decimal Precio { get; set; }
    public int StockInicial { get; set; }
}

