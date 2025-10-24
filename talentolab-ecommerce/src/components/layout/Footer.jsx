import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Sección principal */}
                <div className="footer-main">
                    <div className="footer-brand">
                        <div className="footer-logo">
                            <span className="logo-icon">TL</span>
                            <div className="logo-text">
                                <h3>TalentoLab Store</h3>
                                <p>Tecnología de Vanguardia</p>
                            </div>
                        </div>
                        <p className="footer-description">
                            Tu destino confiable para tecnología de última generación y accesorios premium.
                        </p>
                    </div>

                    <div className="footer-links">
                        <div className="footer-section">
                            <h4>Explorar</h4>
                            <Link to="/?categoria=tecnologia" className="footer-link">Lo Último!</Link>
                            <Link to="/?categoria=accesorios" className="footer-link">Accesorios</Link>
                            <Link to="/?categoria=audio" className="footer-link">Audio</Link>
                            <Link to="/?categoria=perifericos" className="footer-link">Gaming</Link>
                        </div>

                        <div className="footer-section">
                            <h4>Cuenta</h4>
                            <Link to="/login" className="footer-link">Ingresar</Link>
                            <Link to="/carrito" className="footer-link">Carrito</Link>
                        </div>

                        <div className="footer-section">
                            <h4>Soporte</h4>
                            <span className="footer-link">Contacto</span>
                            <span className="footer-link">FAQ</span>
                            <span className="footer-link">Términos</span>
                        </div>
                    </div>
                </div>

                {/* Línea separadora */}
                <div className="footer-divider"></div>

                {/* Sección inferior con información personal */}
                <div className="footer-bottom">
                    <div className="footer-info">
                        <div className="project-info">
                            <p className="copyright">
                                © {currentYear} TalentoLab Store. Todos los derechos reservados.
                            </p>
                            <p className="project-details">
                                Proyecto desarrollado por <strong>Brian Pitz</strong> | 
                                E-commerce React con Context API
                            </p>
                        </div>
                        
                        <div className="tech-stack">
                            <span className="tech-item">React</span>
                            <span className="tech-item">Vite</span>
                            <span className="tech-item">Context API</span>
                            <span className="tech-item">CSS3</span>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;