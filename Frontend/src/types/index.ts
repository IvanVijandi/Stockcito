// ─── Productos e Inventario ───────────────────────────────────────────────────

export interface ProductoDTO {
  id: string;
  sku: string;
  nombre: string;
  precioUnitario: number;
}

export interface PronosticoDTO {
  demandaPredicha: number;
  confianza: number;
  cantidadRecomendada: number;
  nivelAlerta: 'none' | 'low' | 'medium' | 'high';
}

export interface InventarioDTO {
  productoId: string;
  producto: ProductoDTO;
  stockActual: number;
  forecast: PronosticoDTO;
  estado: 'ok' | 'warning' | 'critical';
  ultimaActualizacion: string;
}

// ─── Órdenes ─────────────────────────────────────────────────────────────────

export interface OrdenDTO {
  id: string;
  productoId: string;
  cantidad: number;
  fechaOrden: string;
  estado: 'draft' | 'pending' | 'confirmed' | 'shipped' | 'received';
  fechaEntrega?: string;
}

// ─── Alertas ─────────────────────────────────────────────────────────────────

export interface AlertaDTO {
  id: string;
  tipo: string;
  severidad: 'low' | 'medium' | 'high';
  mensaje: string;
  producto: string;
  timestamp: string;
}

// ─── Dashboard ───────────────────────────────────────────────────────────────

export interface PuntoForecast {
  semana: string;
  demanda: number;
  esPrediccion?: boolean;
}

export interface DashboardDTO {
  stockValue: number;
  forecastTrend: string;
  ordenesPendientes: number;
  stockEfficiency: number;
  alertas: AlertaDTO[];
  productos: InventarioDTO[];
  forecast: PuntoForecast[];
}

// ─── Chat ─────────────────────────────────────────────────────────────────────

export interface ChatMensaje {
  rol: 'usuario' | 'agente';
  contenido: string;
  timestamp: string;
}

export interface RespuestaAgente {
  respuesta: string;
  pronostico?: PronosticoDTO;
  accionSugerida?: 'create_order' | 'analyze' | 'none';
}

