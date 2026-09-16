import { api } from './api';
import type { PronosticoDTO } from '../types';

export const pronosticoService = {
  getPronostico: (productoId: string) =>
    api.get<PronosticoDTO>(`/inventario/${productoId}/forecast`),
};

