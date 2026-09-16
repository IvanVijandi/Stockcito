import type { InventarioDTO } from '../../../types';
import { useChat } from '../../../hooks/useChat';
import { ListaMensajes } from './ListaMensajes';
import { InputMensaje } from './InputMensaje';

interface Props {
  productos: InventarioDTO[];
}

export function ChatAgente({ productos }: Props) {
  const { mensajes, enviando, enviar } = useChat();

  return (
    <section style={{ marginBottom: 'var(--pad-xl)' }}>
      <h2 style={{ fontSize: '13px', color: 'var(--text-secondary)', marginBottom: 'var(--pad-md)' }}>
        Chat con Agente IA
      </h2>
      <div className="chat">
        <div className="chat__header">💬 Preguntale al agente sobre tu inventario</div>
        <ListaMensajes mensajes={mensajes} enviando={enviando} />
        <InputMensaje productos={productos} enviando={enviando} onEnviar={enviar} />
      </div>
    </section>
  );
}

