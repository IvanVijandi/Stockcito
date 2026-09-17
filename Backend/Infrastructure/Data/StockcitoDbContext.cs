using Infrastructure.Models;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure.Data;

public class StockcitoDbContext : DbContext
{
    public StockcitoDbContext(DbContextOptions<StockcitoDbContext> options) : base(options)
    {
    }

    public DbSet<ProductoModel> Productos { get; set; } = null!;
    public DbSet<MovimientoStockModel> MovimientosStock { get; set; } = null!;

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        // Configuración de ProductoModel
        modelBuilder.Entity<ProductoModel>(entity =>
        {
            entity.HasKey(e => e.Id);
            
            entity.Property(e => e.Nombre)
                .IsRequired()
                .HasMaxLength(200);

            entity.Property(e => e.Sku)
                .IsRequired()
                .HasMaxLength(50);
                
            entity.HasIndex(e => e.Sku).IsUnique();

            entity.Property(e => e.Precio)
                .HasColumnType("decimal(18,2)");

            entity.Property(e => e.Estado)
                .IsRequired()
                .HasMaxLength(50);
        });

        // Configuración de MovimientoStockModel
        modelBuilder.Entity<MovimientoStockModel>(entity =>
        {
            entity.HasKey(e => e.Id);

            entity.Property(e => e.Tipo)
                .IsRequired()
                .HasMaxLength(50);

            entity.Property(e => e.Razon)
                .HasMaxLength(500);

            // Foreign Key
            entity.HasOne<ProductoModel>()
                .WithMany()
                .HasForeignKey(e => e.ProductoId)
                .OnDelete(DeleteBehavior.Restrict);
        });
    }
}

