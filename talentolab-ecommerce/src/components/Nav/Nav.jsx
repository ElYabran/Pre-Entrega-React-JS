// 📄 src/components/Nav/Nav.jsx - REEMPLAZAR TODO
import { Link } from 'react-router-dom';
import { useCarrito } from '../../context/CarritoContext';
import './Nav.css';

function Nav({ isAuthenticated, onLogout }) {
    const { carrito } = useCarrito();

    return (
        <>
            {/* HEADER COMPACTO */}
            <header className="nav-header">
                <div className="header-content">
                    <div className="header-main">
                        <Link to="/" className="header-link">
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <div style={{
                                    width: '24px',
                                    height: '24px',
                                    background: 'linear-gradient(135deg, #7B61FF 0%, #00D4AA 100%)',
                                    borderRadius: '4px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontSize: '12px',
                                    color: 'white',
                                    fontWeight: 'bold'
                                }}>
                                    TL
                                </div>
                                <h1 className="header-title">
                                    TalentoLab
                                </h1>
                            </div>
                            <p className="header-subtitle">
                                Technology Store
                            </p>
                        </Link>
                    </div>
                </div>
            </header>

            {/* NAVEGACIÓN OPTIMIZADA */}
            <nav className="nav">
                <div className="nav-container">
                    <div className="nav-left">
                        <Link to="/" className="nav-link">
                            Inicio
                        </Link>

                        {/* CATEGORÍAS COMO NAVEGACIÓN PRINCIPAL */}
                        <div className="nav-categories">
                            <Link to="/?categoria=tecnologia" className="category-link">
                                Lo Último!
                            </Link>
                            
                            <Link to="/?categoria=accesorios" className="category-link">
                                Accesorios
                            </Link>
                            
                            <Link to="/?categoria=audio" className="category-link">
                                Audio
                            </Link>
                            
                            <Link to="/?categoria=perifericos" className="category-link">
                                Gaming
                            </Link>
                        </div>
                    </div>

                    <div className="nav-right">
                        <Link to="/carrito" className="cart-link">
                            Carrito 
                            {carrito.length > 0 && (
                                <span className="cart-badge">
                                    {carrito.length}
                                </span>
                            )}
                        </Link>
                        
                        {isAuthenticated ? (
                            <button onClick={onLogout} className="logout-button">
                                Cerrar Sesión
                            </button>
                        ) : (
                            <Link to="/login" className="login-button">
                                Ingresar
                            </Link>
                        )}
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Nav;