namespace Infrastructure.Models;

public class ProductoModel
{
    public Guid Id { get; set; }
    public string Nombre { get; set; } = string.Empty;
    public string Sku { get; set; } = string.Empty;
    public int Stock { get; set; }
    public decimal Precio { get; set; }
    public string Estado { get; set; } = string.Empty;
    public DateTime CreadoEn { get; set; }
    public DateTime ActualizadoEn { get; set; }
}

