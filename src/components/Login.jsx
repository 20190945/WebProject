import React from 'react';
import '../components/Login.css'
import { Link } from "react-router-dom";
import Header from '../Header';
import Footer from '../Footer';

function Login() {
    return (        
        <div>
            <Header />
            <div className='wrapper'>
                <form action="">
                    <main className="main-content">
                        <h4>Ingreso para clientes registrados</h4>
                        <div className='input-box'>
                            <input type='text' placeholder='email' required />
                        </div>
                        <div className='input-box'>
                            <input type='password' placeholder='password' required />
                        </div>
                        <button type='submit'>Ingresar</button>
                        <div className='forgot-password'>
                            <p><Link to="/enlace1">Olvidé mi contraseña</Link></p>                        
                        </div>
                        <div className='register'>
                            <p><Link to="/registro">No tengo cuenta, deseo registrarme</Link></p>
                        </div>
                    </main>
                </form>
            </div>
            <Footer />
        </div>
    );
}

export default Login;
