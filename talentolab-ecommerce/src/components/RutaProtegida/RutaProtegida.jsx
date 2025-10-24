import { Navigate } from 'react-router-dom';

function RutaProtegida({ children, isAuthenticated }) {
    if (!isAuthenticated) {
        return <Navigate to="/login" replace />;
    }
    
    return children;
}

export default RutaProtegida;