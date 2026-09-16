import type { ChatMensaje } from '../../../types';
import { Spinner } from '../../common/Spinner';
import { useEffect, useRef } from 'react';

interface Props {
  mensajes: ChatMensaje[];
  enviando: boolean;
}

export function ListaMensajes({ mensajes, enviando }: Props) {
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [mensajes, enviando]);

  return (
    <div className="chat__mensajes">
      {mensajes.length === 0 && (
        <p style={{ color: 'var(--text-muted)', fontSize: '13px', textAlign: 'center', marginTop: 'auto' }}>
          Seleccioná un producto y hacé tu pregunta.
        </p>
      )}
      {mensajes.map((msg, i) => (
        <div key={i} className={`chat__burbuja chat__burbuja--${msg.rol}`}>
          {msg.contenido}
        </div>
      ))}
      {enviando && (
        <div className="chat__burbuja chat__burbuja--agente" style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          <Spinner /> Analizando...
        </div>
      )}
      <div ref={bottomRef} />
    </div>
  );
}

