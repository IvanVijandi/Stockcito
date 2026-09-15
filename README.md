# 📦 Inventory + Demand Forecasting Agent

> **Sistema inteligente de gestión de inventario con predicción de demanda basada en IA**

Un platform B2B SaaS que automatiza la gestión de inventario para retailers y e-commerce, utilizando agentes IA conversacionales para análisis predictivo y recomendaciones automáticas de compra.

---

## 🎯 El Problema

### Retailers y e-commerce enfrentan tres desafíos críticos:

```
❌ PROBLEMA 1: Sobre-stock
   → Dinero inmovilizado en inventario que no se vende
   → Costos de almacenaje innecesarios
   → Riesgo de obsolescencia

❌ PROBLEMA 2: Falta de stock
   → Pérdida de ventas por productos agotados
   → Clientes insatisfechos
   → Competencia gana la venta

❌ PROBLEMA 3: Decisiones manuales
   → Gerentes usan "gut feeling" para pedir
   → Sin análisis histórico
   → Lleva horas hacer reportes
```

**Impacto financiero:** Según studies de retail, 10-30% del capital está atrapado en inventario ineficiente.

---

## ✨ La Solución

### Inventory Forecasting Agent

Un sistema que predice demanda futura con **IA + ML**, combinando:

```
┌────────────────────────────────────────────────────────┐
│                                                        │
│  1. ANÁLISIS HISTÓRICO                                │
│     → Datos de ventas últimos 12 meses                │
│     → Patrones de estacionalidad                      │
│     → Tendencias por temporada                        │
│                                                        │
│  2. PREDICCIÓN INTELIGENTE                            │
│     → Modelos ML (Prophet, ARIMA, XGBoost)           │
│     → Agentes IA para análisis contextual             │
│     → Alertas automáticas                             │
│                                                        │
│  3. RECOMENDACIONES ACCIONABLES                       │
│     → "Pide X unidades HOY"                           │
│     → "Lead time es 30 días, prepárate"               │
│     → "Reducir stock de producto Y"                   │
│                                                        │
└────────────────────────────────────────────────────────┘
```

### Resultados esperados:
✅ Reduce sobre-stock en 20-35%
✅ Disminuye roturas de stock en 15-25%
✅ Ahorros en costos de almacenaje
✅ Mejora ROI del capital de trabajo

---

## 🏗️ Arquitectura del Sistema

### Diagrama General

```
┌─────────────────────────────────────────────────────────────┐
│                     Frontend (React)                        │
│         ┌──────────────────────────────────────┐            │
│         │ Dashboard                             │            │
│         │ - Stock actual                        │            │
│         │ - Predicciones                        │            │
│         │ - Alertas                             │            │
│         │ - Chat con Agente                     │            │
│         └──────────────────────────────────────┘            │
└────────────────┬─────────────────────────────────────────────┘
                 │
    ┌────────────▼──────────────────────────────┐
    │        .NET 8 C# API                      │
    │    (DDD + Clean Architecture)             │
    │                                           │
    │  ├─ Semantic Kernel (Agentes IA)          │
    │  ├─ ML.NET (Forecasting)                  │
    │  ├─ Entity Framework                      │
    │  ├─ Domain Driven Design                  │
    │  └─ Azure Service Integration             │
    │                                           │
    │  Agregados:                               │
    │  • Product                                │
    │  • Inventory                              │
    │  • Forecast                               │
    │  • Supplier                               │
    │  • Order                                  │
    └────────────┬───────────────────────────────┘
                 │
    ┌────────────┼──────────────────────┐
    │            │                      │
┌───▼──────┐ ┌──▼──────┐ ┌────────┐   │
│ Ollama    │ │LocalDB  │ │Service │   │
│(LLM Local)│ │(SQL)    │ │Bus     │   │
└───────────┘ └─────────┘ └────────┘   │
                                        │
                   Opcionales (Prod):    │
                   • Azure OpenAI       │
                   • Azure SQL Server   │
                   • Application Insights
                   • Blob Storage
```

### Capas

#### 1. **Presentation Layer (Frontend)**
```
React + TypeScript
├─ Dashboard
│  ├─ Stock overview
│  ├─ Forecast charts
│  ├─ Alerts
│  └─ Orders history
├─ Agente Chat
│  └─ Conversación natural
└─ Analytics
   └─ Reportes detallados
```

#### 2. **API Layer (.NET 8)**
```
Clean Architecture + DDD
├─ Controllers
├─ Application Services
├─ Domain Entities
├─ Repositories
└─ External Services
   ├─ Semantic Kernel
   ├─ ML.NET
   └─ Azure Services
```

#### 3. **Data Layer**
```
Entity Framework + SQL Server
├─ Products
├─ Inventory
├─ Sales History
├─ Forecasts
├─ Suppliers
└─ Orders
```

---

## 🤖 Agentes IA (Semantic Kernel)

### Agent 1: Inventory Analyzer
```
Responsabilidad: Analizar datos históricos

Input:  "¿Cuándo se acaba el producto X?"
        
Process:
  1. Fetch sales history (últimos 90 días)
  2. Calcular promedio diario
  3. Consultar stock actual
  4. Comparar con lead time
  
Output: "Stock durará 25 días. Lead time es 30 días.
         ⚠️ ACCIÓN: Pide HOY para llegar a tiempo"
```

### Agent 2: Demand Predictor
```
Responsabilidad: Predecir demanda futura

Input:  Product ID

Process:
  1. Obtener histórico 12 meses
  2. Aplicar modelo ML.NET (Prophet/ARIMA)
  3. Ajustar por estacionalidad
  4. Detectar anomalías
  
Output: {
  "forecast_30days": 500,
  "confidence": 0.87,
  "seasonal_adjustment": 1.2,
  "recommendation": "Pedir 550 unidades"
}
```

### Agent 3: Cobranza Inteligente
```
Responsabilidad: Automatizar decisiones de compra

Input:  Predicciones + Restricciones (presupuesto, espacio)

Process:
  1. Evaluar múltiples productos
  2. Priorizar por urgencia
  3. Considerar cash flow
  4. Negociar cantidades óptimas
  
Output: "POR HACER HOY:
  - Producto A: 500 unidades
  - Producto B: 200 unidades
  - Costo total: $45,000
  - ROI estimado: 35%"
```

---

## 📊 Flujo Principal

### Caso de Uso: Usuario pregunta sobre inventario

```
┌─────────────────────────────────────────────────────────┐
│ Usuario en Dashboard                                    │
│ "¿Cuándo necesito pedir más del producto A?"          │
└──────────────────┬──────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────────┐
│ Frontend → API                                          │
│ POST /api/inventory/analyze                            │
│ { query: "¿Cuándo necesito pedir...?", productId: "A" }
└──────────────────┬──────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────────┐
│ .NET API - InventoryForecastHandler                    │
│                                                         │
│ 1. Semantic Kernel recibe query                        │
│ 2. Orquesta agentes:                                   │
│    └─ Agent1: get_sales_history()                      │
│    └─ Agent2: run_forecast_model()                     │
│    └─ Agent3: check_supplier_leadtime()                │
│ 3. Procesa respuestas                                  │
│ 4. Retorna resultado estructurado                      │
└──────────────────┬──────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────────┐
│ Base de Datos                                           │
│ • Fetch: Sales history últimos 90 días                │
│ • Fetch: Stock actual                                 │
│ • Fetch: Supplier lead time                           │
│ • Save: Predicción generada                           │
└──────────────────┬──────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────────┐
│ ML.NET Forecasting Service                              │
│ • Aplica modelo entrenado                              │
│ • Retorna predicción con intervalo de confianza        │
│ • Genera alertas si es necesario                       │
└──────────────────┬──────────────────────────────────────┘
                   │
                   ▼
┌─────────────────────────────────────────────────────────┐
│ Frontend → Dashboard                                    │
│ Muestra:                                               │
│ • Gráfico de predicción                               │
│ • Recomendación: "Pedir 500 unidades HOY"             │
│ • Alert rojo: "Lead time crítico"                     │
│ • Acción sugerida con botón "Crear Orden"             │
└─────────────────────────────────────────────────────────┘
```

### Flujo Automatizado (Background Job)

```
Cada día a las 8 AM:
  1. Sistema revisa TODOS los productos
  2. Ejecuta predicciones
  3. Evalúa niveles de stock
  4. Genera alertas
  5. Recomendaciones automáticas
  6. Notifica a user (email + push)
```

---

## 💾 Entidades del Dominio (DDD)

### Product (Agregado Raíz)
```csharp
public class Product : AggregateRoot
{
    public Guid Id { get; private set; }
    public string Sku { get; private set; }
    public string Name { get; private set; }
    public decimal UnitCost { get; private set; }
    public Supplier Supplier { get; private set; }
    public int LeadTimeDays { get; private set; }
    
    public List<DomainEvent> UncommittedEvents { get; }
}
```

### Inventory (Agregado Raíz)
```csharp
public class Inventory : AggregateRoot
{
    public Guid Id { get; private set; }
    public Product Product { get; private set; }
    public int CurrentStock { get; private set; }
    public int ReorderPoint { get; private set; }
    public List<InventoryMovement> Movements { get; private set; }
    public ForecastPrediction LatestForecast { get; private set; }
    
    public void UpdateStock(int quantity, string reason) { }
    public void ApplyForecast(ForecastPrediction forecast) { }
    public bool IsLowStock() => CurrentStock <= ReorderPoint;
}
```

### Forecast (Value Object)
```csharp
public class ForecastPrediction : ValueObject
{
    public int PredictedDemand { get; }
    public double Confidence { get; }
    public DateTime GeneratedAt { get; }
    public int RecommendedOrderQuantity { get; }
    public string AlertLevel { get; } // None, Low, Medium, High
}
```

### Supplier (Agregado)
```csharp
public class Supplier : AggregateRoot
{
    public Guid Id { get; private set; }
    public string Name { get; private set; }
    public int LeadTimeAverageDays { get; private set; }
    public List<Product> Products { get; private set; }
}
```

### Order (Agregado)
```csharp
public class Order : AggregateRoot
{
    public Guid Id { get; private set; }
    public DateTime OrderDate { get; private set; }
    public OrderStatus Status { get; private set; }
    public List<OrderLine> Lines { get; private set; }
    public Supplier Supplier { get; private set; }
    public DateTime? ExpectedDelivery { get; private set; }
    
    public void GenerateFromForecast(ForecastPrediction forecast) { }
    public void ReceiveStock(OrderLine line, int quantity) { }
}

public enum OrderStatus { Draft, Pending, Confirmed, Shipped, Received, Cancelled }
```

---

## 🛠️ Stack Tecnológico

### Backend
```
Framework:       .NET 8
Language:        C#
Architecture:    Clean Architecture + DDD
API:             RESTful (ASP.NET Core)
ORM:             Entity Framework Core
```

### IA & Machine Learning
```
Agent Framework:     Semantic Kernel
LLM (Desarrollo):    Ollama (local)
LLM (Producción):    Azure OpenAI (opcional)
Forecasting:         ML.NET
```

### Base de Datos
```
Desarrollo:     LocalDB (SQL Server)
Producción:     Azure SQL Server (opcional)
Migrations:     Entity Framework Core Migrations
```

### Frontend
```
Framework:      React 18
Language:       TypeScript
State:          Redux / Zustand
Charts:         Recharts / Chart.js
UI:             Tailwind CSS / Material-UI
```

### DevOps & Cloud
```
Versionado:      Git + GitHub
CI/CD:           GitHub Actions (local setup)
Containerización: Docker (opcional)
Producción:      Azure App Service (opcional)
```

---

## 📋 Requisitos y Dependencias

### Desarrollo Local

```bash
# Requerimientos
- .NET 8 SDK
- Visual Studio 2022 / VS Code
- SQL Server LocalDB
- Node.js 18+
- Ollama (para LLM local)
- Git

# Hardware recomendado
- RAM: 8GB mínimo (16GB ideal)
- Storage: 20GB
- GPU (opcional): NVIDIA/AMD para Ollama más rápido
```

### NuGet Packages
```
Microsoft.SemanticKernel
Microsoft.ML
Microsoft.EntityFrameworkCore
Microsoft.EntityFrameworkCore.SqlServer
MediatR
FluentValidation
Serilog
```

### NPM Packages (Frontend)
```
react
typescript
react-redux
recharts
tailwindcss
axios
```

---

## 🚀 Getting Started

### 1. Clonar repo
```bash
git clone https://github.com/tu-user/inventory-forecasting-agent.git
cd inventory-forecasting-agent
```

### 2. Setup Backend

#### Opción A: Desarrollo local (TODO GRATIS)
```bash
# Instalar Ollama
# https://ollama.ai → descargar e instalar

# En terminal 1
ollama pull llama2
ollama serve

# En terminal 2 - ir al repo
cd backend
dotnet restore
dotnet build
dotnet run
# API disponible en http://localhost:5000
```

#### Opción B: Con Azure OpenAI (Producción)
```bash
# Configurar secrets
dotnet user-secrets init
dotnet user-secrets set "AzureOpenAI:Endpoint" "https://your-resource.openai.azure.com/"
dotnet user-secrets set "AzureOpenAI:ApiKey" "your-key"
```

### 3. Setup Frontend
```bash
cd frontend
npm install
npm start
# Disponible en http://localhost:3000
```

### 4. Seed de datos
```bash
cd backend
dotnet run --seed
# Crea productos, histórico de ventas, proveedores de ejemplo
```

### 5. Entrenar modelos ML
```bash
# Endpoint disponible en
POST http://localhost:5000/api/ml/train-models

# Usa histórico de ventas para entrenar modelos
# Tarda ~2-5 minutos en completarse
```

---

## 📖 Uso

### Chat con el Agente

```bash
# Enviar query conversacional
curl -X POST http://localhost:5000/api/inventory/chat \
  -H "Content-Type: application/json" \
  -d '{
    "message": "¿Cuándo necesito pedir más del producto SKU-001?",
    "productId": "prod-123"
  }'

# Respuesta esperada:
{
  "response": "Stock del producto X durará ~25 días. Lead time es 30 días. 
               ⚠️ ACCIÓN URGENTE: Debes pedir HOY para no quedarte sin stock.
               Recomiendo: 500 unidades",
  "forecast": {
    "predictedDemand": 450,
    "confidence": 0.89,
    "recommendedQuantity": 500,
    "alertLevel": "High"
  },
  "suggestedAction": "create_order"
}
```

### Obtener Predicción
```bash
curl -X GET http://localhost:5000/api/inventory/forecast?productId=prod-123
```

### Crear Orden Automática
```bash
curl -X POST http://localhost:5000/api/orders \
  -H "Content-Type: application/json" \
  -d '{
    "productId": "prod-123",
    "quantity": 500,
    "supplierId": "supp-456"
  }'
```

### Dashboard Analítico
```
GET  http://localhost:3000
├─ Inventory Overview
├─ Forecast Charts
├─ Alert History
└─ Agent Chat
```

---

## 📊 Casos de Uso

### Caso 1: Gerente de Retail
```
Lunes a las 8 AM:
→ Recibe notificación: "3 productos en stock crítico"
→ Abre dashboard
→ Ve recomendaciones de compra
→ 1-click para crear órdenes
→ Listo. Ahorra 1 hora de análisis manual
```

### Caso 2: Director Financiero
```
Cierre de mes:
→ Genera reporte: "Capital atrapado en inventario: $150k"
→ Analiza: "Productos con lento movimiento"
→ Recibe sugerencia: "Reducir stock en A y B"
→ Mejora cash flow en 15%
```

### Caso 3: E-commerce Automatizado
```
Todos los días:
→ Sistema predice demanda
→ Si stock bajo: automáticamente genera orden
→ Notifica a proveedor vía API
→ Cero intervención manual
→ 0 roturas de stock
```

---

## 🧪 Testing

```bash
# Unit tests
cd backend
dotnet test --logger "console;verbosity=detailed"

# Integration tests
dotnet test --filter Category=Integration

# Load testing (opcional)
# Usar k6 / JMeter para simular múltiples usuarios
```

---

## 🔄 CI/CD Pipeline

```yaml
# .github/workflows/ci.yml
- Trigger: Push a main
- Build: .NET solution
- Test: Unit + Integration
- SonarQube: Code quality
- Deploy (manual): Azure App Service
```

---

## 📈 Roadmap

### V1.0 (MVP - Semanas 1-6)
- [x] Agregados principales (DDD)
- [x] Semantic Kernel + Agents básico
- [x] ML.NET forecasting (Prophet)
- [x] Chat conversacional simple
- [x] Dashboard básico React
- [ ] Alertas vía email

### V1.1 (Mejoras - Semanas 7-8)
- [ ] Multi-agente (Analyst + Predictor + Decision)
- [ ] ARIMA + XGBoost como opciones
- [ ] Reportes automáticos diarios
- [ ] Integración con Mercado Pago (pagos)
- [ ] Mobile responsive

### V2.0 (Escalabilidad - Futuro)
- [ ] Integración con SAP/sistemas legacy
- [ ] Predicción por categoría (cluster de productos)
- [ ] Machine learning con feedback (aprende de errores)
- [ ] Integración con proveedores (API automática)
- [ ] Azure OpenAI en lugar de Ollama
- [ ] Kubernetes deployment
- [ ] Analytics avanzados (Power BI)

---

## 🤝 Contribuir

```bash
# Fork el proyecto
git checkout -b feature/tu-feature
git commit -m "feat: descripción"
git push origin feature/tu-feature
# Crear Pull Request
```

---

## 📝 Licencia

MIT License - Ver LICENSE.md

---

## 👤 Autor

**Vijandi Iván Andrés**
- 🔗 GitHub: [@tu-usuario]
- 💼 LinkedIn: [tu-profile]
- 📧 Email: tu-email@example.com

---

## 📞 Soporte

- 📖 Documentación: `/docs`
- 🐛 Issues: GitHub Issues
- 💬 Discussions: GitHub Discussions
- 📧 Email: soporte@tudominio.com

---

## 🙏 Acknowledgments

- Microsoft Semantic Kernel
- ML.NET
- Ollama
- React community
- DDD principles (Eric Evans)

---

## 📊 Estadísticas del Proyecto

```
├─ Backend:        ~2000 líneas C#
├─ Frontend:       ~1500 líneas React/TS
├─ Tests:          ~1200 líneas
├─ Documentación:  Este README + docs/
└─ Total:          ~5500 líneas
```

---

**Última actualización:** Enero 2025
**Versión:** 1.0.0-alpha
**Estado:** En desarrollo activo ✅
