import { useNavigate } from 'react-router-dom';
import { useCarrito } from '../../context/CarritoContext';
import './Item.css';

function Item({ producto }) {
    const { agregarAlCarrito } = useCarrito();
    const navigate = useNavigate();

    const manejarAgregarAlCarrito = (e) => {
        e.stopPropagation();
        e.preventDefault();
        agregarAlCarrito(producto);
        alert(`✅ ${producto.nombre} agregado al carrito!`);
    };

    const manejarClickCard = () => {
        navigate(`/productos/${producto.id}`);
    };

    const categoriaNombres = {
        tecnologia: 'Lo Último!',
        accesorios: 'Accesorios',
        audio: 'Audio',
        perifericos: 'Periféricos'
    };

    return (
        <div 
            className="item-card"
            onClick={manejarClickCard}
        >
            {/* Badge de categoría */}
            {producto.categoria && (
                <span className="item-category">
                    {categoriaNombres[producto.categoria] || producto.categoria}
                </span>
            )}
            
            <div className="item-image">
                <img 
                    src={producto.imagen} 
                    alt={producto.nombre}
                    className="item-img"
                />
            </div>
            
            <div className="card-container">
                <h3 className="item-title">
                    {producto.nombre}
                </h3>

                {producto.descripcion && (
                    <p className="item-description">
                        {producto.descripcion.length > 100 
                            ? `${producto.descripcion.substring(0, 100)}...` 
                            : producto.descripcion
                        }
                    </p>
                )}
                
                <p className="item-price">
                    ${producto.precio.toFixed(2)}
                </p>
                
                <button 
                    className="item-button"
                    onClick={manejarAgregarAlCarrito}
                >
                    🛒 Agregar al Carrito
                </button>
            </div>
        </div>
    );
}

export default Item;