const BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:5000/api';

async function get<T>(path: string): Promise<T> {
  const respuesta = await fetch(`${BASE_URL}${path}`);
  if (!respuesta.ok) {
    throw new Error(`Error HTTP ${respuesta.status}: ${respuesta.statusText}`);
  }
  return respuesta.json() as Promise<T>;
}

async function post<T>(path: string, cuerpo: unknown): Promise<T> {
  const respuesta = await fetch(`${BASE_URL}${path}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(cuerpo),
  });
  if (!respuesta.ok) {
    throw new Error(`Error HTTP ${respuesta.status}: ${respuesta.statusText}`);
  }
  return respuesta.json() as Promise<T>;
}

export const api = { get, post };

