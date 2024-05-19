import React from "react";
import { Link } from "react-router-dom";
import '../Alumno3y4/RecuperacionContraseña.css'
import Footer from '../components/Footer'
import Header from '../components/Header'


function RecuperacionPassword() {
    return (
        <>
            <Header/>
            <div className="container">
                <div className='wrapper'>
                    <form action="">
                        <main className="main-content">
                            <h4>Ingrese su correo para enviar contraseña</h4>
                            <div className='input-box'>
                                <input type='email' placeholder='email' required/>
                            </div>
                            <button type='submit'>Enviar</button>
                            <div className='regresar'>
                                <p><a href='#'>Regresar a Login</a></p>
                            </div>
                        </main>
                    </form>
                </div>
            </div>
            <Footer/>
        </>
    )
}

export default RecuperacionPassword;