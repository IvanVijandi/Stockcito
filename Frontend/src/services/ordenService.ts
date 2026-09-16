import { api } from './api';
import type { OrdenDTO } from '../types';

export const ordenService = {
  getPendientes: () => api.get<OrdenDTO[]>('/ordenes/pendientes'),

  crearOrden: (productoId: string, cantidad: number) =>
    api.post<OrdenDTO>('/ordenes', { productoId, cantidad }),
};

