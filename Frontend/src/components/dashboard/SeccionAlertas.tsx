import type { AlertaDTO } from '../../types';
import { AlertBox } from '../common/AlertBox';

interface Props {
  alertas: AlertaDTO[];
}

export function SeccionAlertas({ alertas }: Props) {
  if (alertas.length === 0) return null;

  return (
    <section style={{ marginBottom: 'var(--pad-xl)' }}>
      <AlertBox alertas={alertas} />
    </section>
  );
}

