import React from "react";
import { Link } from "react-router-dom";
import '../Alumno3y4/DatosRegUsu.css'
import Footer from '../components/Footer'
import Header from '../components/Header'

function Registro(){
    return (
        <>
        <Header/>
       
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
        <div className='registro'>
                <form action="">
                <h2>Datos de Registro</h2>
                <div className='input-box'>
                    <input type='text' placeholder='Nombre' required/>
                </div>
                <div className='input-box'>
                    <input type='text' placeholder='Apellido' required/>
                </div>
                <div className='input-box'>
                    <input type='text' placeholder='Correo' required/>
                </div>
                <button type='submit'>Actualizar</button>
                </form>
        </div>
        </div>  
        <Footer/>
        </>
    )
}

export default Registro;