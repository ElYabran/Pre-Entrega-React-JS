import { useNavigate } from 'react-router-dom';
import { useCarrito } from '../../context/CarritoContext';
import './ItemDetail.css';

function ItemDetail({ producto }) {
    const navigate = useNavigate();
    const { agregarAlCarrito } = useCarrito();

    const manejarAgregarAlCarrito = () => {
        agregarAlCarrito(producto);
        alert(`✅ ${producto.nombre} agregado al carrito!`);
    };

    return (
        <div className="itemdetail-container">
            <button 
                className="back-button"
                onClick={() => navigate(-1)}
            >
                ← Volver
            </button>

            <div className="itemdetail-card">
                <div className="itemdetail-image">
                    <img 
                        src={producto.imagen} 
                        alt={producto.nombre}
                        className="itemdetail-img"
                    />
                </div>

                <div className="itemdetail-info">
                    <span className="itemdetail-category">
                        {producto.categoria === 'tecnologia' ? 'Lo Último!' : producto.categoria?.toUpperCase()}
                    </span>
                    
                    <h1 className="itemdetail-title">{producto.nombre}</h1>
                    
                    <p className="itemdetail-price">${producto.precio.toFixed(2)}</p>
                    
                    <p className="itemdetail-description">{producto.descripcion}</p>

                    <button 
                        className="itemdetail-add-button"
                        onClick={manejarAgregarAlCarrito}
                    >
                        🛒 Agregar al Carrito
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;