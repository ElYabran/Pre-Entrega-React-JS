import { useCarrito } from '../../context/CarritoContext';
import './Carrito.css';

function Carrito() {
    const { carrito, eliminarDelCarrito, vaciarCarrito, calcularTotal } = useCarrito();
    
    const total = calcularTotal();

    return (
        <div className="carrito-container">
            <h1 className="carrito-title">
                Carrito de Compras
            </h1>
            
            {carrito.length === 0 ? (
                <div className="carrito-vacio">
                    <div className="carrito-vacio-icono">🛒</div>
                    <h3 className="carrito-vacio-titulo">
                        Tu carrito está vacío
                    </h3>
                    <p className="carrito-vacio-texto">
                        ¡Explora nuestros productos y agrega algunos artículos increíbles!
                    </p>
                </div>
            ) : (
                <>
                    <div className="carrito-productos">
                        <h2 className="carrito-subtitulo">
                            Tus Productos ({carrito.length})
                        </h2>
                        
                        {carrito.map((item) => (
                            <div key={item.carritoId} className="carrito-item">
                                <div className="item-imagen">
                                    <img 
                                        src={item.imagen} 
                                        alt={item.nombre}
                                    />
                                </div>
                                
                                <div className="item-info">
                                    <h3 className="item-nombre">
                                        {item.nombre}
                                    </h3>
                                    <p className="item-precio">
                                        ${item.precio?.toFixed(2) || '0.00'}
                                    </p>
                                </div>
                                
                                <button 
                                    onClick={() => eliminarDelCarrito(item.carritoId)}
                                    className="item-eliminar"
                                >
                                    Eliminar
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="carrito-total">
                        <div className="total-info">
                            <h3 className="total-titulo">
                                Total del Carrito:
                            </h3>
                            <span className="total-monto">
                                ${total.toFixed(2)}
                            </span>
                        </div>
                        
                        <div className="carrito-acciones">
                            <button 
                                onClick={vaciarCarrito}
                                className="vaciar-carrito"
                            >
                                Vaciar Carrito
                            </button>
                            
                            <button className="proceder-pago">
                                Proceder al Pago
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default Carrito;