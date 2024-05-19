import React from "react";
import { Link } from "react-router-dom";
import '../Alumno3y4/RegistroUsuario.css'
import Footer from '../components/Footer'
import Header from '../components/Header'

function RegistroUsuario(){
    return(
        <>
        <Header/>
        <div>
            <div className='wrapper'>
                <form action="">
                    <main className="main-content">
                    <h4>Registra una nueva cuenta</h4>
                    <div className="input-box">
                        <input type='text' placeholder='Nombre' required/>p
                    </div>
                    <div className="input-box">
                        <input type='text' placeholder='Apellido' required/>p
                    </div>
                    <div className='input-box'>
                        <input type='email' placeholder='Correo' required/>
                    </div>
                    <div className='input-box'>
                        <input type='password' placeholder='Password' required/>
                    </div>
                    <div className='input-box'>
                        <input type='password' placeholder='Confirm password' required/>
                    </div>
                    <button type='submit'>Crear nueva cuenta</button>
                    </main>
                </form>
            </div>
        </div>
        <Footer/>
        </>
    )
}
 
export default RegistroUsuario