import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { Inventario } from './pages/Inventario';
import { Ordenes } from './pages/Ordenes';

import { ProductosPage } from './pages/ProductosPage';
import { StockPage } from './pages/StockPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/inventario" element={<Inventario />} />
          <Route path="/ordenes" element={<Ordenes />} />
          <Route path="/productos/nuevo" element={<ProductosPage />} />
          <Route path="/stock/gestionar" element={<StockPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

