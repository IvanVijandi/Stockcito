import type { AlertaDTO } from '../../types';

interface Props {
  alerta: AlertaDTO;
}

function ItemAlerta({ alerta }: Props) {
  return (
    <div className="alert-box__item">
      <span className="alert-box__icon">⚠️</span>
      <div>
        <p className="alert-box__mensaje">{alerta.mensaje}</p>
        <p className="alert-box__producto">{alerta.producto}</p>
      </div>
    </div>
  );
}

interface AlertBoxProps {
  alertas: AlertaDTO[];
}

export function AlertBox({ alertas }: AlertBoxProps) {
  return (
    <div className="alert-box">
      {alertas.map((alerta) => (
        <ItemAlerta key={alerta.id} alerta={alerta} />
      ))}
    </div>
  );
}

