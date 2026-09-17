import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import type { PuntoForecast, InventarioDTO } from '../../types';

interface Props {
  datos: PuntoForecast[];
  productos: InventarioDTO[];
}

export function GraficoPronostico({ datos, productos }: Props) {
  const [productoSeleccionado, setProductoSeleccionado] = useState<string>('');

  return (
    <section style={{ marginBottom: 'var(--pad-xl)' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 'var(--pad-md)' }}>
        <h2 style={{ fontSize: '13px', color: 'var(--text-secondary)' }}>
          Pronóstico de demanda
        </h2>
        <select 
          value={productoSeleccionado} 
          onChange={(e) => setProductoSeleccionado(e.target.value)}
          style={{
            padding: '6px 12px',
            borderRadius: 'var(--radius)',
            border: '1px solid #4a4a4a',
            background: 'var(--surface-2)',
            color: 'var(--text-primary)',
            fontSize: '13px',
            minWidth: '220px',
            outline: 'none',
            cursor: 'pointer'
          }}
        >
          <option value="">Seleccione un producto</option>
          {productos.map(p => (
            <option key={p.productoId} value={p.productoId}>{p.producto.nombre}</option>
          ))}
        </select>
      </div>
      <div style={{
        background: 'var(--surface-1)',
        border: 'var(--border)',
        borderRadius: 'var(--radius)',
        padding: 'var(--pad-lg)',
      }}>
        {productoSeleccionado ? (
          <>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={datos} barSize={36}>
                <XAxis
                  dataKey="semana"
                  tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <YAxis
                  tick={{ fill: 'var(--text-secondary)', fontSize: 12 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip
                  contentStyle={{
                    background: 'var(--surface-2)',
                    border: '0.5px solid #3a3a3a',
                    borderRadius: '6px',
                    color: 'var(--text-primary)',
                    fontSize: '13px',
                  }}
                  cursor={{ fill: 'rgba(255,255,255,0.03)' }}
                />
                <Bar dataKey="demanda" radius={[4, 4, 0, 0]}>
                  {datos.map((punto, index) => (
                    <Cell
                      key={index}
                      fill={punto.esPrediccion ? '#2563eb' : '#3a3a3a'}
                      fillOpacity={punto.esPrediccion ? 0.9 : 0.7}
                    />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
            <p style={{ fontSize: '11px', color: 'var(--text-muted)', marginTop: 'var(--pad-sm)', textAlign: 'right' }}>
              🔵 Semana 4 = predicción
            </p>
          </>
        ) : (
          <div style={{ height: '220px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)' }}>
            Seleccione un producto para ver su pronóstico
          </div>
        )}
      </div>
    </section>
  );
}

