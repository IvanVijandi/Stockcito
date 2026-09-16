import type { DashboardDTO } from '../../types';
import { KPICard } from '../common/KPICard';

interface Props {
  datos: DashboardDTO;
}

export function SeccionKPIs({ datos }: Props) {
  return (
    <section style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
      gap: 'var(--pad-md)',
      marginBottom: 'var(--pad-xl)',
    }}>
      <KPICard
        label="Valor en Stock"
        valor={`$${(datos.stockValue / 1000).toFixed(1)}k`}
        cambio="+5.2% vs mes anterior"
        tendencia="up"
      />
      <KPICard
        label="Forecast demanda"
        valor={datos.forecastTrend}
        cambio="Próximos 30 días"
        tendencia="up"
      />
      <KPICard
        label="Órdenes pendientes"
        valor={String(datos.ordenesPendientes)}
        cambio="2 esta semana"
        tendencia="neutral"
      />
      <KPICard
        label="Eficiencia de stock"
        valor={`${datos.stockEfficiency}%`}
        cambio="Meta: 85%"
        tendencia={datos.stockEfficiency >= 85 ? 'up' : 'down'}
      />
    </section>
  );
}

