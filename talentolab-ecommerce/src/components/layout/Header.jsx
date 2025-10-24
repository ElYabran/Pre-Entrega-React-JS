// Definiciones de colores
const COLOR_ACCENT = '#00ADB5';         // Verde Cian
const COLOR_SECONDARY_DARK = '#393E46'; // Gris oscuro para componentes
const COLOR_PRIMARY_DARK = '#222831';   // Gris muy oscuro

function Header() {
    return (
        <header style={{
            // Usamos el color principal oscuro para el fondo (se fusiona con el Nav)
            backgroundColor: COLOR_PRIMARY_DARK, 
            color: 'white',
            padding: '1.5rem 2rem 0.5rem 2rem', // Menos padding inferior
            textAlign: 'center',
            // Sombra sutil pero visible
            boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
            width: '100%',
            margin: 0,
            // Quitamos el borde, ya que el Nav tendrá su propio separador visual
            borderBottom: 'none' 
        }}>
            <h1 style={{ 
                margin: 0, 
                fontSize: '2rem',
                fontWeight: '700',
                color: COLOR_ACCENT, // Título en color de acento
                textShadow: '0 0 5px rgba(0, 173, 181, 0.4)'
            }}>
                💻 TalentoLab Store
            </h1>
            <p style={{ 
                margin: '0.3rem 0 0.5rem 0', // Menos margen superior
                opacity: 0.8,
                fontSize: '0.9rem',
                fontWeight: '300',
                color: '#AAAAAA'
            }}>
                Tecnología que ilumina tu futuro
            </p>
        </header>
    );
}

export default Header;