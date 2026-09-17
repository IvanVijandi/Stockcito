var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();

// Registro de Casos de Uso
builder.Services.AddScoped<Application.UseCases.Productos.IAgregarProductoUseCase, Application.UseCases.Productos.AgregarProductoUseCase>();
builder.Services.AddScoped<Application.UseCases.Stock.IAgregarStockUseCase, Application.UseCases.Stock.AgregarStockUseCase>();
builder.Services.AddScoped<Application.UseCases.Stock.IConsultarStockUseCase, Application.UseCases.Stock.ConsultarStockUseCase>();

// Learn more about configuring OpenAPI at https://aka.ms/aspnet/openapi
builder.Services.AddOpenApi();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
