import { useDashboard } from '../hooks/useDashboard';
import { Spinner } from '../components/common/Spinner';
import { SeccionAlertas } from '../components/dashboard/SeccionAlertas';
import { SeccionKPIs } from '../components/dashboard/SeccionKPIs';
import { TablaProductos } from '../components/dashboard/TablaProductos/TablaProductos';
import { GraficoPronostico } from '../components/dashboard/GraficoPronostico';
import { ChatAgente } from '../components/dashboard/ChatAgente/ChatAgente';

export function Dashboard() {
  const { datos, cargando, error } = useDashboard();

  if (cargando) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '80px' }}>
        <Spinner />
      </div>
    );
  }

  if (error || !datos) {
    return (
      <p style={{ color: 'var(--danger)', textAlign: 'center', paddingTop: '80px' }}>
        {error ?? 'No se pudieron cargar los datos.'}
      </p>
    );
  }

  const handlePedir = (productoId: string) => {
    // TODO Fase 2: abrir modal de crear orden
    console.log('Pedir producto:', productoId);
  };

  return (
    <div>
      <SeccionAlertas alertas={datos.alertas} />
      <SeccionKPIs datos={datos} />
      <TablaProductos productos={datos.productos} onPedir={handlePedir} />
      <GraficoPronostico datos={datos.forecast} />
      <ChatAgente productos={datos.productos} />
    </div>
  );
}

