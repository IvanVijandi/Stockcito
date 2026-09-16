import { Spinner } from './Spinner';

interface Props {
  label: string;
  onClick?: () => void;
  cargando?: boolean;
  deshabilitado?: boolean;
  variante?: 'primary' | 'ghost';
  type?: 'button' | 'submit';
}

export function ActionButton({
  label,
  onClick,
  cargando = false,
  deshabilitado = false,
  variante = 'primary',
  type = 'button',
}: Props) {
  return (
    <button
      type={type}
      className={`action-btn action-btn--${variante}`}
      onClick={onClick}
      disabled={deshabilitado || cargando}
    >
      {cargando ? <Spinner /> : label}
    </button>
  );
}

