import { useState, useCallback } from 'react';

export interface Notificacion {
  id: string;
  tipo: 'success' | 'error' | 'info';
  mensaje: string;
}

export function useNotificaciones() {
  const [notificaciones, setNotificaciones] = useState<Notificacion[]>([]);

  const mostrar = useCallback((tipo: Notificacion['tipo'], mensaje: string) => {
    const id = crypto.randomUUID();
    setNotificaciones((prev) => [...prev, { id, tipo, mensaje }]);
    setTimeout(() => {
      setNotificaciones((prev) => prev.filter((n) => n.id !== id));
    }, 4000);
  }, []);

  const cerrar = useCallback((id: string) => {
    setNotificaciones((prev) => prev.filter((n) => n.id !== id));
  }, []);

  return { notificaciones, mostrar, cerrar };
}

