import React from "react";
import { Link } from "react-router-dom";
import '../components/CambiarContra.css'
import Footer from '../components/Footer'
import Header from '../components/Header'

function CambiarPassword() {
    return (
        <>
            <Header />
            
            <div id="lateral">
                <aside>
                    <h3>Mi cuenta</h3>
                    <dt id="ordenes-recientes">Ordenes Recientes</dt>
                    <dt id="datos-registro">Datos de Registro</dt>
                    <dt id="cambiar-password">Cambiar Password</dt>
                </aside>
                
                <div>
                    <a href="#ordenes-recientes">Ir a Ordenes Recientes</a>
                    <br />
                    <a href="#datos-registro">Ir a Datos de Registro</a>
                    <br />
                    <a href="#cambiar-password">Ir a Cambiar de Password</a>
                </div>
            </div>

            <div className="main-content">
                <div className='contraseña'>
                    <form action="">
                        <h2>Cambiar Password</h2>
                        <div className='input-box'>
                            <input type='password' placeholder='Actual' required/>
                        </div>
                        <div className='input-box'>
                            <input type='password' placeholder='Nuevo' required/>
                        </div>
                        <div className='input-box'>
                            <input type='password' placeholder='Repetir' required/>
                        </div>
                        <button type='submit'>Cambiar</button>
                    </form>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default CambiarPassword;
