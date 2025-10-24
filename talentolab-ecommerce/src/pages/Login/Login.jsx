import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Simulación de login - siempre funciona para demo
        if (username && password) {
            onLogin(true);
            navigate('/');
        }
    };

    return (
        <div className="login-container">
            <div className="login-card">
                <h1 className="login-title">
                    🔐 Login
                </h1>
                
                <p className="login-subtitle">
                    Ingresa a tu cuenta
                </p>

                <form onSubmit={handleSubmit}>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Usuario"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="login-input"
                        />
                    </div>

                    <div className="input-group">
                        <input
                            type="password"
                            placeholder="Contraseña"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="login-input"
                        />
                    </div>

                    <button 
                        type="submit"
                        className="login-button"
                    >
                        Iniciar Sesión
                    </button>
                </form>

                <div className="login-demo">
                    <p className="demo-text">
                        💡 <strong>Demo:</strong> Cualquier usuario y contraseña funcionan
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Login;