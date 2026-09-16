type Estado = 'ok' | 'warning' | 'critical';

const CONFIG: Record<Estado, { icono: string; etiqueta: string }> = {
  ok:       { icono: '●', etiqueta: 'OK' },
  warning:  { icono: '▲', etiqueta: 'Bajo' },
  critical: { icono: '✕', etiqueta: 'Crítico' },
};

interface Props {
  estado: Estado;
}

export function StatusBadge({ estado }: Props) {
  const { icono, etiqueta } = CONFIG[estado];

  return (
    <span className={`status-badge status-badge--${estado}`}>
      <span>{icono}</span>
      <span>{etiqueta}</span>
    </span>
  );
}

