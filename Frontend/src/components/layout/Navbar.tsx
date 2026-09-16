import { NavLink } from 'react-router-dom';

export function Navbar() {
  return (
    <nav style={{
      background: 'var(--surface-1)',
      borderBottom: 'var(--border)',
      padding: '0 var(--pad-xl)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--pad-xl)',
      height: '52px',
      position: 'sticky',
      top: 0,
      zIndex: 100,
    }}>
      <span style={{ fontWeight: 500, fontSize: '15px', marginRight: 'auto' }}>
        📦 Stockcito
      </span>

      {(['/', '/inventario', '/ordenes'] as const).map((ruta) => {
        const etiqueta = ruta === '/' ? 'Dashboard' : ruta === '/inventario' ? 'Inventario' : 'Órdenes';
        return (
          <NavLink
            key={ruta}
            to={ruta}
            end={ruta === '/'}
            style={({ isActive }) => ({
              color: isActive ? 'var(--text-primary)' : 'var(--text-secondary)',
              fontSize: '13px',
            })}
          >
            {etiqueta}
          </NavLink>
        );
      })}
    </nav>
  );
}

