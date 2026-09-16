import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { Inventario } from './pages/Inventario';
import { Ordenes } from './pages/Ordenes';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/ordenes" element={<Ordenes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

