interface Props {
  label: string;
  valor: string;
  cambio?: string;
  tendencia?: 'up' | 'down' | 'neutral';
}

export function KPICard({ label, valor, cambio, tendencia = 'neutral' }: Props) {
  return (
    <div className="kpi-card">
      <span className="kpi-card__label">{label}</span>
      <span className="kpi-card__value">{valor}</span>
      {cambio && (
        <span className={`kpi-card__change kpi-card__change--${tendencia}`}>
          {cambio}
        </span>
      )}
    </div>
  );
}

