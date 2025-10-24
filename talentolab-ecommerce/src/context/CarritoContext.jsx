import { createContext, useContext, useState } from 'react';

// Crear el contexto
export const CarritoContext = createContext();

// Proveedor del contexto
export function CarritoProvider({ children }) {
    const [carrito, setCarrito] = useState([]);

    // Agregar producto al carrito - CORREGIDO: evita duplicados exactos
    const agregarAlCarrito = (producto) => {
        // Agregar ID único temporal para evitar problemas de duplicación
        const productoConId = {
            ...producto,
            carritoId: Date.now() + Math.random() // ID único temporal
        };
        setCarrito([...carrito, productoConId]);
    };

    // Vaciar carrito
    const vaciarCarrito = () => {
        setCarrito([]);
    };

    // Eliminar un producto específico del carrito (por carritoId)
    const eliminarDelCarrito = (carritoId) => {
        const nuevoCarrito = carrito.filter(item => item.carritoId !== carritoId);
        setCarrito(nuevoCarrito);
    };

    // Calcular total
    const calcularTotal = () => {
        return carrito.reduce((total, producto) => total + producto.precio, 0);
    };

    // Obtener cantidad de items únicos
    const obtenerCantidadItems = () => {
        return carrito.length;
    };

    const value = {
        carrito,
        agregarAlCarrito,
        vaciarCarrito,
        eliminarDelCarrito,
        calcularTotal,
        obtenerCantidadItems
    };

    return (
        <CarritoContext.Provider value={value}>
            {children}
        </CarritoContext.Provider>
    );
}

// Hook personalizado para usar el contexto
export function useCarrito() {
    const context = useContext(CarritoContext);
    if (!context) {
        // Lanzar un error si el hook se usa fuera del proveedor
        throw new Error('useCarrito debe usarse dentro de CarritoProvider');
    }
    return context;
}