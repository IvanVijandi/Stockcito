namespace Infrastructure.Models;

public class MovimientoStockModel
{
    public Guid Id { get; set; }
    public Guid ProductoId { get; set; }
    public string Tipo { get; set; } = string.Empty;
    public int Unidades { get; set; }
    public string? Razon { get; set; }
    public DateTime OcurridoEn { get; set; }
}

