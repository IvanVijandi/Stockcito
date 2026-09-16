import { api } from './api';
import type { DashboardDTO, InventarioDTO } from '../types';

export const inventarioService = {
  getDashboard: () => api.get<DashboardDTO>('/inventario/dashboard'),

  getDetalle: (productoId: string) =>
    api.get<InventarioDTO>(`/inventario/${productoId}`),

  actualizarStock: (productoId: string, cantidad: number) =>
    api.post<void>('/inventario/actualizar-stock', { productoId, cantidad }),
};

