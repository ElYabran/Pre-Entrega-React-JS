import './Admin.css';

function Admin() {
    return (
        <div className="admin-container">
            <h2 className="admin-title">⚙️ Panel de Administración</h2>
            <p className="admin-subtitle">Área reservada para administradores del sistema.</p>
            <div className="admin-warning">
                <p className="warning-icon">🔒</p>
                <p className="warning-text">Acceso restringido</p>
                <p className="warning-description">Esta área requiere autenticación especial.</p>
            </div>
        </div>
    );
}

export default Admin;