import { useState } from 'react';
import type { InventarioDTO } from '../../../types';
import { FilaProducto } from './FilaProducto';

interface Props {
  productos: InventarioDTO[];
  onPedir: (productoId: string) => void;
}

export function TablaProductos({ productos, onPedir }: Props) {
  const [busqueda, setBusqueda] = useState('');

  const productosFiltrados = productos.filter((p) =>
    p.producto.nombre.toLowerCase().includes(busqueda.toLowerCase())
  );

  return (
    <section style={{ marginBottom: 'var(--pad-xl)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--pad-md)' }}>
        <h2 style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
          Productos
        </h2>
        <input 
          type="text" 
          placeholder="Buscar por producto..."
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          style={{
            padding: '6px 12px',
            borderRadius: 'var(--radius)',
            border: '1px solid #4a4a4a',
            background: 'var(--surface-2)',
            color: 'var(--text-primary)',
            fontSize: '13px',
            minWidth: '220px',
            outline: 'none'
          }}
        />
      </div>
      <div className="tabla">
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Stock actual</th>
              <th>Pronostico</th>
              <th>Estado</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {productosFiltrados.map((item) => (
              <FilaProducto key={item.productoId} item={item} onPedir={onPedir} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

