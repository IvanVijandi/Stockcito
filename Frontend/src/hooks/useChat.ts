import { useState } from 'react';
import type { ChatMensaje } from '../types';

export function useChat() {
  const [mensajes, setMensajes] = useState<ChatMensaje[]>([]);
  const [enviando, setEnviando] = useState(false);

  const enviar = async (productoId: string, texto: string) => {
    if (!texto.trim() || !productoId) return;

    const mensajeUsuario: ChatMensaje = {
      rol: 'usuario',
      contenido: texto,
      timestamp: new Date().toISOString(),
    };

    setMensajes((prev) => [...prev, mensajeUsuario]);
    setEnviando(true);

    try {
      // TODO Fase 2: reemplazar por agenteService.enviarMensaje(productoId, texto)
      await new Promise((resolve) => setTimeout(resolve, 1200));

      const respuestaAgente: ChatMensaje = {
        rol: 'agente',
        contenido: `Analizando el producto seleccionado... El stock actual tiene una proyección de demanda de 128 unidades para la próxima semana. Se recomienda realizar un pedido de reposición de 150 unidades hoy.`,
        timestamp: new Date().toISOString(),
      };

      setMensajes((prev) => [...prev, respuestaAgente]);
    } finally {
      setEnviando(false);
    }
  };

  return { mensajes, enviando, enviar };
}

