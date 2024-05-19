import React from "react";
import { Link } from "react-router-dom";
import '../Alumno3y4/DetalleOrden.css'
import Footer from '../components/Footer'
import Header from '../components/Header'

function DetalleDeOrdenUSU(){
    return(
        <>
        <Header/>
        <h2>Detalles de Orden Nro 12312312344</h2>
        <div className='datos'>
            <h3>Datos de Compra</h3>
            <div className='direccion'>
                <h4>Dirección de Envío</h4>
                <p>Jirón Huiracocha 2081 Departamento 922</p>
                <p>Jesús María, Lima</p>
                <p>Lima</p>
                <p>Perúz</p>
            </div>
            <div className='pago'>
                <h4>Pago</h4>
                <label htmlFor="idQR">Pago con código QR</label>
                <input type="radio" value="QR" name="tipo" id="idQR" />
                <label htmlFor="idCredito">Pago con tarjeta de crédito</label>
                <input type="radio" value="Credito" name="tipo" id="idCredito" />
                <p>Tarjeta de Credito que termina en: ****8859</p>
            </div>
        </div>
        <div className='envio'>
            <h3>Método de Envío</h3>
            <div className='tipo'>
                <label htmlFor="idECO">Económico Aéreo - S/10.00</label>
                <input type="radio" value="ECO" name="tipo" id="idECO" />
                <label htmlFor="idPRIO">Envío Prioritario(5 a 10 días) - S/17.00 </label>
                <input type="radio" value="PRIO" name="tipo" id="idPRIO" />
            </div>
            <div className='item'>
                <h4>Item en Pedido: </h4>
                
            </div>
            <div className='resumen'>
                <h4>Resumen de Orden: </h4>
                <p>Subtotal: </p>
                <p>Envío: </p>
                <p>Impuestos: </p>
                <p>Total: </p>
                <button type="reset">Cancelar Pedido</button>
            </div>
        </div>
        <Footer/>
        </>
    )
}

export default DetalleDeOrdenUSU;