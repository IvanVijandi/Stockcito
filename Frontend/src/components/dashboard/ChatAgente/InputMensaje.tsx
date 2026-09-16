import { useState, type KeyboardEvent } from 'react';
import type { InventarioDTO } from '../../../types';
import { ActionButton } from '../../common/ActionButton';

interface Props {
  productos: InventarioDTO[];
  enviando: boolean;
  onEnviar: (productoId: string, texto: string) => void;
}

export function InputMensaje({ productos, enviando, onEnviar }: Props) {
  const [productoId, setProductoId] = useState('');
  const [texto, setTexto] = useState('');

  const handleEnviar = () => {
    if (!texto.trim() || !productoId) return;
    onEnviar(productoId, texto.trim());
    setTexto('');
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleEnviar();
  };

  return (
    <div className="chat__footer">
      <select
        className="chat__select"
        value={productoId}
        onChange={(e) => setProductoId(e.target.value)}
      >
        <option value="">Seleccionar producto...</option>
        {productos.map((p) => (
          <option key={p.productoId} value={p.productoId}>
            {p.producto.nombre}
          </option>
        ))}
      </select>
      <div className="chat__enviar-row">
        <input
          className="chat__input"
          type="text"
          placeholder="¿Cuándo necesito pedir stock?"
          value={texto}
          onChange={(e) => setTexto(e.target.value)}
          onKeyDown={handleKeyDown}
          disabled={enviando}
        />
        <ActionButton
          label="Enviar"
          onClick={handleEnviar}
          cargando={enviando}
          deshabilitado={!texto.trim() || !productoId}
        />
      </div>
    </div>
  );
}

