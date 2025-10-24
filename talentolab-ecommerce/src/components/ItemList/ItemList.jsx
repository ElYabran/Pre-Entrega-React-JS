// 📄 src/components/ItemList/ItemList.jsx - REEMPLAZAR TODO
import Item from '../Item/Item';
import { 
    COLOR_ACCENT, 
    COLOR_TEXT_LIGHT,
    COLOR_SUBTLE_TEXT 
} from '../../App';
import './ItemList.css';

function ItemList({ productos, cargando, error, categoria, esPaginaInicio }) {
    const categoriaTitulos = {
        tecnologia: "Lo Último!",
        accesorios: "Accesorios 🖱️", 
        audio: "Audio 🔊",
        perifericos: "Periféricos 🎮"
    };

    const getTituloCategoria = () => {
        if (categoria && categoriaTitulos[categoria]) {
            return categoriaTitulos[categoria];
        }
        if (esPaginaInicio) {
            return "Productos Destacados ⭐";
        }
        return "Nuestros Productos";
    };

    const getSubtituloCategoria = () => {
        if (categoria && categoriaTitulos[categoria]) {
            return `Descubre nuestra selección exclusiva de productos ${categoriaTitulos[categoria].toLowerCase()}`;
        }
        if (esPaginaInicio) {
            return "Los mejores productos tecnológicos seleccionados para ti";
        }
        return "Explora nuestra completa colección de productos tecnológicos seleccionados cuidadosamente.";
    };

    if (cargando) {
        return (
            <div className="loading-container">
                <div className="loading-icon">🔄</div>
                <p className="loading-text">Cargando productos...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="error-container">
                <div className="error-icon">❌</div>
                <p className="error-text">{error}</p>
            </div>
        );
    }

    if (productos.length === 0) {
        return (
            <div>
                <div className="itemlist-header">
                    <h1 className="itemlist-title">
                        {getTituloCategoria()}
                    </h1>
                    <p className="itemlist-subtitle">
                        {getSubtituloCategoria()}
                    </p>
                </div>
                <div className="no-products-container">
                    <div className="no-products-icon">
                        {categoria ? '🔍' : '📦'}
                    </div>
                    <h3 className="no-products-title">
                        {categoria ? 
                            `No hay productos en ${categoriaTitulos[categoria] || categoria}` : 
                            'No hay productos disponibles'
                        }
                    </h3>
                    <p className="no-products-text">
                        {categoria ? 
                            'Explora otras categorías o todos nuestros productos.' : 
                            'Vuelve a intentarlo más tarde.'
                        }
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div>
            {/* Solo mostrar header si no es página de inicio (ya tiene banner) */}
            {!esPaginaInicio && (
                <div className="itemlist-header">
                    <h1 className="itemlist-title">
                        {getTituloCategoria()}
                    </h1>
                    <p className="itemlist-subtitle">
                        {getSubtituloCategoria()}
                        {categoria && (
                            <span className="products-count">
                                {productos.length} producto{productos.length !== 1 ? 's' : ''} encontrado{productos.length !== 1 ? 's' : ''}
                            </span>
                        )}
                    </p>
                </div>
            )}
            
            <div className="items-grid">
                {productos.map(producto => (
                    <Item 
                        key={producto.id}
                        producto={producto}
                    />
                ))}
            </div>
        </div>
    );
}

export default ItemList;