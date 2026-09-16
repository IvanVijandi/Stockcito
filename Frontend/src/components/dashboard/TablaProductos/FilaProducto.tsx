import type { InventarioDTO } from '../../../types';
import { StatusBadge } from '../../common/StatusBadge';
import { ActionButton } from '../../common/ActionButton';

interface Props {
  item: InventarioDTO;
  onPedir: (productoId: string) => void;
}

export function FilaProducto({ item, onPedir }: Props) {
  return (
    <tr>
      <td>
        <div style={{ fontWeight: 500 }}>{item.producto.nombre}</div>
        <div style={{ color: 'var(--text-muted)', fontSize: '12px' }}>{item.producto.sku}</div>
      </td>
      <td>{item.stockActual} u.</td>
      <td>{item.forecast.demandaPredicha} u.</td>
      <td>
        <StatusBadge estado={item.estado} />
      </td>
      <td>
        <ActionButton
          label="Pedir ahora"
          variante={item.estado === 'critical' ? 'primary' : 'ghost'}
          onClick={() => onPedir(item.productoId)}
        />
      </td>
    </tr>
  );
}

