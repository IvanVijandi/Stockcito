import { api } from './api';
import type { RespuestaAgente } from '../types';

export const agenteService = {
  enviarMensaje: (productoId: string, mensaje: string) =>
    api.post<RespuestaAgente>('/agent/chat', { productoId, mensaje }),
};

