// 📄 src/App.jsx - REEMPLAZAR TODO
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CarritoProvider } from './context/CarritoContext';
import Nav from './components/Nav/Nav';
import Footer from './components/layout/Footer'; // ✅ Importar el nuevo Footer
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Carrito from './pages/Carrito/Carrito';
import Login from './pages/Login/Login';
import Admin from './pages/Admin/Admin';
import RutaProtegida from './components/RutaProtegida/RutaProtegida';
import './App.css';

// NUEVA PALETA DE COLORES MODERNA
export const COLOR_ACCENT = '#7B61FF';
export const COLOR_ACCENT_HOVER = '#6D4EFF';
export const COLOR_PRIMARY_DARK = '#0A0A0A';
export const COLOR_SECONDARY_DARK = '#1A1A1A';
export const COLOR_CARD_BG = '#1E1E1E';
export const COLOR_TEXT_LIGHT = '#FFFFFF';
export const COLOR_SUBTLE_TEXT = 'rgba(255, 255, 255, 0.7)';
export const COLOR_SUCCESS = '#00D4AA';
export const COLOR_WARNING = '#FFB800';
export const COLOR_ERROR = '#FF4757';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = (estado) => {
    setIsAuthenticated(estado);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <CarritoProvider>
      <div className="app">
        <Nav isAuthenticated={isAuthenticated} onLogout={handleLogout} />
        
        <main className="main-content">
          <Routes>
            {/* PÁGINA DE INICIO AHORA ES PRODUCTOS */}
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/productos" element={<ItemListContainer />} />
            <Route path="/productos/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={
              <RutaProtegida isAuthenticated={isAuthenticated}>
                <Carrito />
              </RutaProtegida>
            } />
            <Route path="/admin" element={
              <RutaProtegida isAuthenticated={isAuthenticated}>
                <Admin />
              </RutaProtegida>
            } />
          </Routes>
        </main>

        {/* ✅ REEMPLAZAR EL FOOTER SIMPLE POR EL COMPONENTE */}
        <Footer />
      </div>
    </CarritoProvider>
  );
}

export default App;