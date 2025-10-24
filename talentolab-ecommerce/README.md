Brian Pitz - Pre-entrega Curso React.js | Talento Tech
Este proyecto de e-commerce constituye mi trabajo de pre-entrega, actualmente en estado de desarrollo. No representa la versión final y aún contiene áreas pendientes de optimización y características por implementar. El código evidencia el progreso en el aprendizaje de React.js hasta esta etapa.Agradezco la oportunidad de compartir este avance.




✨ Características Principales
🛍️ Funcionalidades de E-commerce
Catálogo de productos con categorías organizadas

Carrito de compras persistente con Context API

Sistema de autenticación para rutas protegidas

Detalles de producto con vistas individuales

Diseño responsive para todos los dispositivos

🎨 Experiencia de Usuario
Interfaz moderna con diseño dark mode

Estados de carga y manejo de errores

Navegación fluida con React Router

Animaciones y transiciones suaves

Paleta de colores profesional y consistente

🚀 Tecnologías Utilizadas
Frontend: React 18, React Router DOM

Estado Global: Context API + Hooks

Build Tool: Vite

Estilos: CSS3 moderno con Grid y Flexbox

Routing: React Router v6

📱 Responsive Design
La aplicación está optimizada para:

📱 Mobile (320px - 768px)

📟 Tablet (768px - 1024px)

🖥️ Desktop (1024px+)


src/
├── components/
│   ├── layout/          # Componentes de estructura
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Footer.css
│   ├── Nav/             # Navegación principal
│   │   ├── Nav.jsx
│   │   └── Nav.css
│   ├── Item/            # Tarjetas de producto
│   │   ├── Item.jsx
│   │   └── Item.css
│   ├── ItemList/        # Grid de productos
│   │   ├── ItemList.jsx
│   │   └── ItemList.css
│   ├── ItemDetail/      # Vista detallada
│   │   ├── ItemDetail.jsx
│   │   └── ItemDetail.css
│   ├── ItemListContainer/ # Contenedor principal
│   │   ├── ItemListContainer.jsx
│   │   └── ItemListContainer.css
│   ├── ItemDetailContainer/ # Contenedor detalle
│   │   ├── ItemDetailContainer.jsx
│   │   └── ItemDetailContainer.css
│   └── RutaProtegida/   # Componente de seguridad
│       └── RutaProtegida.jsx
├── pages/               # Vistas de la aplicación
│   ├── Carrito/         # Página del carrito
│   │   ├── Carrito.jsx
│   │   └── Carrito.css
│   ├── Login/           # Página de autenticación
│   │   ├── Login.jsx
│   │   └── Login.css
│   └── Admin/           # Panel de administración
│       ├── Admin.jsx
│       └── Admin.css
├── context/             # Estado global
│   └── CarritoContext.jsx
├── assets/              # Recursos estáticos
│   └── images/          # Imágenes de productos
├── App.jsx              # Componente principal
├── App.css              # Estilos globales
└── main.jsx             # Punto de entrada