import { useState, useEffect, useCallback } from 'react';
import type { DashboardDTO } from '../types';
import { dashboardMock } from '../mocks/dashboardMock';

const INTERVALO_REFRESH_MS = 5 * 60 * 1000; // 5 minutos

export function useDashboard() {
  const [datos, setDatos] = useState<DashboardDTO | null>(null);
  const [cargando, setCargando] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const cargar = useCallback(async () => {
    setCargando(true);
    setError(null);
    try {
      // TODO Fase 2: reemplazar por inventarioService.getDashboard()
      await new Promise((resolve) => setTimeout(resolve, 600)); // simula latencia
      setDatos(dashboardMock);
    } catch (e) {
      setError(e instanceof Error ? e.message : 'Error al cargar el dashboard');
    } finally {
      setCargando(false);
    }
  }, []);

  useEffect(() => {
    cargar();
    const intervalo = setInterval(cargar, INTERVALO_REFRESH_MS);
    return () => clearInterval(intervalo);
  }, [cargar]);

  return { datos, cargando, error, refrescar: cargar };
}

