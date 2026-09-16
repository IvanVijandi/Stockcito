import type { DashboardDTO } from '../types';

export const dashboardMock: DashboardDTO = {
  stockValue: 45200,
  forecastTrend: '+15%',
  ordenesPendientes: 5,
  stockEfficiency: 78,

  alertas: [
    {
      id: '1',
      tipo: 'stock_critico',
      severidad: 'high',
      mensaje: 'El producto "Cable USB-C" tiene stock para menos de 3 días.',
      producto: 'Cable USB-C',
      timestamp: new Date().toISOString(),
    },
    {
      id: '2',
      tipo: 'stock_bajo',
      severidad: 'medium',
      mensaje: '"Teclado Mecánico" está por debajo del umbral mínimo.',
      producto: 'Teclado Mecánico',
      timestamp: new Date().toISOString(),
    },
  ],

  productos: [
    {
      productoId: 'p1',
      producto: { id: 'p1', sku: 'USB-C-001', nombre: 'Cable USB-C', precioUnitario: 1500 },
      stockActual: 8,
      forecast: { demandaPredicha: 120, confianza: 0.91, cantidadRecomendada: 150, nivelAlerta: 'high' },
      estado: 'critical',
      ultimaActualizacion: new Date().toISOString(),
    },
    {
      productoId: 'p2',
      producto: { id: 'p2', sku: 'TEC-MEC-002', nombre: 'Teclado Mecánico', precioUnitario: 12000 },
      stockActual: 22,
      forecast: { demandaPredicha: 45, confianza: 0.85, cantidadRecomendada: 50, nivelAlerta: 'medium' },
      estado: 'warning',
      ultimaActualizacion: new Date().toISOString(),
    },
    {
      productoId: 'p3',
      producto: { id: 'p3', sku: 'MON-27-003', nombre: 'Monitor 27"', precioUnitario: 85000 },
      stockActual: 15,
      forecast: { demandaPredicha: 10, confianza: 0.78, cantidadRecomendada: 0, nivelAlerta: 'none' },
      estado: 'ok',
      ultimaActualizacion: new Date().toISOString(),
    },
    {
      productoId: 'p4',
      producto: { id: 'p4', sku: 'MSE-RGB-004', nombre: 'Mouse Gamer RGB', precioUnitario: 8500 },
      stockActual: 60,
      forecast: { demandaPredicha: 30, confianza: 0.88, cantidadRecomendada: 0, nivelAlerta: 'none' },
      estado: 'ok',
      ultimaActualizacion: new Date().toISOString(),
    },
  ],

  forecast: [
    { semana: 'Semana 1', demanda: 95 },
    { semana: 'Semana 2', demanda: 110 },
    { semana: 'Semana 3', demanda: 102 },
    { semana: 'Semana 4', demanda: 128, esPrediccion: true },
  ],
};

