import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import './ItemDetailContainer.css';

// Importar las mismas imágenes locales
import laptopGamingPro from '../../assets/images/laptop-gaming-pro.jpg';
import macbookAirM2 from '../../assets/images/macbook-air-m2.jpg';
import mouseInalambrico from '../../assets/images/mouse-inalambrico.jpg';
import tecladoMecanico from '../../assets/images/teclado-mecanico.jpg';
import audifonosGaming from '../../assets/images/audifonos-gaming.jpg';
import monitor4k from '../../assets/images/monitor-4k.jpg';
import tabletDigital from '../../assets/images/tablet-digital.jpg';
import altavozBluetooth from '../../assets/images/altavoz-bluetooth.jpg';

function ItemDetailContainer() {
    const [producto, setProducto] = useState(null);
    const [cargando, setCargando] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        const cargarProducto = async () => {
            try {
                setCargando(true);
                
                setTimeout(() => {
                    const productosSimulados = [
                        { 
                            id: 1, 
                            nombre: "Notebook Gamer Asus ROG", 
                            precio: 1850.00, 
                            imagen: laptopGamingPro, 
                            descripcion: "La Notebook Gamer Asus ROG cuenta con tarjeta gráfica RTX 4060, 16GB de RAM DDR5 y pantalla IPS de 15.6 pulgadas con tasa de refresco de 144Hz. Procesador Intel Core i7 de 12ma generación y almacenamiento SSD NVMe de 1TB. Ideal para gaming de alta gama y trabajos de diseño gráfico.", 
                            categoria: "tecnologia" 
                        },
                        { 
                            id: 2, 
                            nombre: "MacBook Air 13\" M3", 
                            precio: 1650.00, 
                            imagen: macbookAirM2, 
                            descripcion: "La MacBook Air con chip M3 ofrece un rendimiento excepcional en un diseño ultradelgado. Incluye 8GB de RAM unificada, 256GB de almacenamiento SSD y pantalla Retina de 13.6 pulgadas. Batería de hasta 18 horas de duración. Perfecta para profesionales y estudiantes.", 
                            categoria: "tecnologia" 
                        },
                        { 
                            id: 3, 
                            nombre: "Mouse Logitech MX Master 3", 
                            precio: 120.00, 
                            imagen: mouseInalambrico, 
                            descripcion: "El MX Master 3 es un mouse ergonómico diseñado para productividad. Cuenta con scroll MagSpeed de precisión, sensor Darkfield de 4000 DPI y conectividad inalámbrica mediante Bluetooth o receptor USB. Batería recargable con hasta 70 días de autonomía.", 
                            categoria: "accesorios" 
                        },
                        { 
                            id: 4, 
                            nombre: "Teclado Mecánico Redragon Kumara", 
                            precio: 85.00, 
                            imagen: tecladoMecanico, 
                            descripcion: "Teclado mecánico gaming con switches Outemu Blue que ofrecen respuesta táctil y sonido clicky. Iluminación RGB personalizable, diseño anti-ghosting de 104 teclas y estructura metálica duradera. Ideal para gamers y programadores.", 
                            categoria: "perifericos" 
                        },
                        { 
                            id: 5, 
                            nombre: "Auriculares HyperX Cloud II", 
                            precio: 150.00, 
                            imagen: audifonosGaming, 
                            descripcion: "Auriculares gaming con sonido surround virtual 7.1, drivers de 53mm y micrófono desmontable con cancelación de ruido. Almohadillas de espuma viscoelástica para mayor comodidad en sesiones largas. Compatible con PC, PS4, PS5 y Xbox.", 
                            categoria: "audio" 
                        },
                        { 
                            id: 6, 
                            nombre: "Monitor Samsung 32\" 4K UHD", 
                            precio: 520.00, 
                            imagen: monitor4k, 
                            descripcion: "Monitor curvo de 32 pulgadas con resolución 4K UHD (3840x2160). Tecnología HDR10, tasa de refresco de 60Hz y tiempo de respuesta de 4ms. Conexiones HDMI, DisplayPort y salida de audio. Perfecto para trabajo, gaming y consumo multimedia.", 
                            categoria: "tecnologia" 
                        },
                        { 
                            id: 7, 
                            nombre: "Tablet Samsung S8 Plus", 
                            precio: 890.00, 
                            imagen: tabletDigital, 
                            descripcion: "Tablet premium con pantalla Super AMOLED de 12.4 pulgadas, S-Pen incluido y 128GB de almacenamiento expandible. Procesador Snapdragon 8 Gen 1 y 8GB de RAM. Ideal para artistas digitales, estudiantes y profesionales creativos.", 
                            categoria: "tecnologia" 
                        },
                        { 
                            id: 8, 
                            nombre: "Parlante JBL Flip 6", 
                            precio: 180.00, 
                            imagen: altavozBluetooth, 
                            descripcion: "Parlante Bluetooth portátil con certificación IP67 resistente al agua y polvo. Sonido stereo JBL Pro, batería de 12 horas de duración y función PartyBoost para conectar múltiples parlantes. Diseño compacto y fácil de transportar.", 
                            categoria: "audio" 
                        }
                    ];
                    
                    const productoEncontrado = productosSimulados.find(p => p.id === parseInt(id));
                    
                    if (productoEncontrado) {
                        setProducto(productoEncontrado);
                    } else {
                        setError('Producto no encontrado');
                    }
                    
                    setCargando(false);
                }, 800);

            } catch (err) {
                setError('Error al cargar el producto. Intenta más tarde.');
                setCargando(false);
            }
        };

        cargarProducto();
    }, [id]);

    if (cargando) {
        return (
            <div className="itemdetail-loading">
                <div className="loading-icon">🔄</div>
                <p className="loading-text">Cargando producto...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="itemdetail-error-container">
                <div className="itemdetail-error">
                    <div className="error-icon">❌</div>
                    <p className="error-text">{error}</p>
                </div>
            </div>
        );
    }

    return <ItemDetail producto={producto} />;
}

export default ItemDetailContainer;