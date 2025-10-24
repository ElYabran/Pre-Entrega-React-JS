import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import ItemList from '../ItemList/ItemList';
import { useCarrito } from '../../context/CarritoContext';
import './ItemListContainer.css';

// Importar imágenes locales
import laptopGamingPro from '../../assets/images/laptop-gaming-pro.jpg';
import macbookAirM2 from '../../assets/images/macbook-air-m2.jpg';
import mouseInalambrico from '../../assets/images/mouse-inalambrico.jpg';
import tecladoMecanico from '../../assets/images/teclado-mecanico.jpg';
import audifonosGaming from '../../assets/images/audifonos-gaming.jpg';
import monitor4k from '../../assets/images/monitor-4k.jpg';
import tabletDigital from '../../assets/images/tablet-digital.jpg';
import altavozBluetooth from '../../assets/images/altavoz-bluetooth.jpg';

function ItemListContainer() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const { carrito, vaciarCarrito } = useCarrito();
    const [searchParams] = useSearchParams();
    
    const categoria = searchParams.get('categoria');

    useEffect(() => {
        const cargarProductos = async () => {
            try {
                setCargando(true);
                
                setTimeout(() => {
                    const productosSimulados = [
                        { 
                            id: 1, 
                            nombre: "Notebook Gamer Asus ROG", 
                            precio: 1850.00, 
                            imagen: laptopGamingPro, 
                            descripcion: "Notebook para gaming con RTX 4060, 16GB RAM y pantalla 144Hz. Ideal para juegos y diseño.", 
                            categoria: "tecnologia" 
                        },
                        { 
                            id: 2, 
                            nombre: "MacBook Air 13\" M3", 
                            precio: 1650.00, 
                            imagen: macbookAirM2, 
                            descripcion: "Ultraliviana con chip M3, 8GB RAM y 256GB SSD. Perfecta para trabajo y estudio.", 
                            categoria: "tecnologia" 
                        },
                        { 
                            id: 3, 
                            nombre: "Mouse Logitech MX Master 3", 
                            precio: 120.00, 
                            imagen: mouseInalambrico, 
                            descripcion: "Mouse ergonómico inalámbrico con scroll infinito. Conexión Bluetooth y USB.", 
                            categoria: "accesorios" 
                        },
                        { 
                            id: 4, 
                            nombre: "Teclado Mecánico Redragon Kumara", 
                            precio: 85.00, 
                            imagen: tecladoMecanico, 
                            descripcion: "Teclado mecánico RGB switches outemu blue. Anti-ghosting y diseño compacto.", 
                            categoria: "perifericos" 
                        },
                        { 
                            id: 5, 
                            nombre: "Auriculares HyperX Cloud II", 
                            precio: 150.00, 
                            imagen: audifonosGaming, 
                            descripcion: "Auriculares gaming con sonido surround 7.1 y micrófono desmontable.", 
                            categoria: "audio" 
                        },
                        { 
                            id: 6, 
                            nombre: "Monitor Samsung 32\" 4K UHD", 
                            precio: 520.00, 
                            imagen: monitor4k, 
                            descripcion: "Monitor curvo 32 pulgadas, 4K UHD con tecnología HDR y FreeSync.", 
                            categoria: "tecnologia" 
                        },
                        { 
                            id: 7, 
                            nombre: "Tablet Samsung S8 Plus", 
                            precio: 890.00, 
                            imagen: tabletDigital, 
                            descripcion: "Tablet con S-Pen incluido, 128GB almacenamiento. Ideal para diseño y notas.", 
                            categoria: "tecnologia" 
                        },
                        { 
                            id: 8, 
                            nombre: "Parlante JBL Flip 6", 
                            precio: 180.00, 
                            imagen: altavozBluetooth, 
                            descripcion: "Parlante Bluetooth portátil resistente al agua. 12 horas de batería.", 
                            categoria: "audio" 
                        }
                    ];
                    
                    let productosFiltrados = productosSimulados;
                    if (categoria) {
                        productosFiltrados = productosSimulados.filter(p => 
                            p.categoria && p.categoria.toLowerCase() === categoria.toLowerCase()
                        );
                    }
                    
                    setProductos(productosFiltrados);
                    setCargando(false);
                }, 1000);

            } catch (err) {
                setError('Error al cargar los productos. Intenta más tarde.');
                setCargando(false);
            }
        };

        cargarProductos();
    }, [categoria]);

    return (
        <div className="itemlistcontainer">
            {!cargando && !error && carrito.length > 0 && (
                <div className="cart-info">
                    <div className="cart-info-content">
                        <div>
                            <p className="cart-info-text">
                                🛒 <strong>Carrito:</strong> {carrito.length} producto{carrito.length !== 1 ? 's' : ''}
                            </p>
                            {carrito.length > 0 && (
                                <p className="cart-info-total">
                                    Total: ${carrito.reduce((total, producto) => total + producto.precio, 0).toFixed(2)}
                                </p>
                            )}
                        </div>
                        
                        <button 
                            onClick={vaciarCarrito}
                            className="clear-cart-button"
                        >
                            🗑️ Vaciar Carrito
                        </button>
                    </div>
                </div>
            )}

            <ItemList 
                productos={productos}
                cargando={cargando}
                error={error}
                categoria={categoria}
            />
        </div>
    );
}

export default ItemListContainer;