import type { InventarioDTO } from '../../../types';
import { FilaProducto } from './FilaProducto';

interface Props {
  productos: InventarioDTO[];
  onPedir: (productoId: string) => void;
}

export function TablaProductos({ productos, onPedir }: Props) {
  return (
    <section style={{ marginBottom: 'var(--pad-xl)' }}>
      <h2 style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: 'var(--pad-md)' }}>
        Productos
      </h2>
      <div className="tabla">
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Stock actual</th>
              <th>Forecast 30d</th>
              <th>Estado</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((item) => (
              <FilaProducto key={item.productoId} item={item} onPedir={onPedir} />
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}

