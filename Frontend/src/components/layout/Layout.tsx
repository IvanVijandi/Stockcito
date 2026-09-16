import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar';

export function Layout() {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Navbar />
      <main style={{
        flex: 1,
        padding: 'var(--pad-xl)',
        maxWidth: '1400px',
        margin: '0 auto',
        width: '100%',
      }}>
        <Outlet />
      </main>
    </div>
  );
}

