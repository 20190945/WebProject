import React from 'react';
import './checkout.css';
import { Link } from 'react-router-dom';

const inputClasses = "w-full mb-2 p-2 border";
const radioLabelClasses = "flex items-center mb-2";
const buttonClasses = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded";

function Checkout() {
    return (
        <div className="max-w-4xl mx-auto p-4">
            <h1 className="text-lg font-semibold mb-4">TIENDA</h1>
            <p className="mb-4">¡Casi Listo! Tu orden no estará completa hasta que revises y presiones el botón "completar orden" al final de la página.</p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-4 border">
                    <h2 className="font-bold mb-3">Datos de compra</h2>
                    <div className="mb-4">
                        <label className="block mb-1">Dirección de Envío</label>
                        <input type="text" placeholder="Línea 1" className={inputClasses} />
                        <input type="text" placeholder="Línea 2" className={inputClasses} />
                        <input type="text" placeholder="Distrito" className={inputClasses} />
                        <input type="text" placeholder="Ciudad" className={inputClasses} />
                        <input type="text" placeholder="País" className={inputClasses} />
                    </div>
                    <div>
                        <label className="block mb-1">Método de Envio</label>
                        <div className={radioLabelClasses}>
                            <input type="radio" id="economico" name="envio" className="mr-2" />
                            <label htmlFor="economico">Económico Aéreo - S/10.00</label>
                        </div>
                        <div className={radioLabelClasses}>
                            <input type="radio" id="prioritario" name="envio" className="mr-2" />
                            <label htmlFor="prioritario">Envio prioritario (5 a 10 días) - S/17.00</label>
                        </div>
                    </div>
                </div>

                <div className="p-4 border">
                    <h2 className="font-bold mb-3">Pago</h2>
                    <div className={radioLabelClasses}>
                        <input type="radio" id="qr" name="pago" />
                        <label htmlFor="qr">Pago con QR</label>
                    </div>
                    <div className={radioLabelClasses}>
                        <input type="radio" id="tarjeta" name="pago" />
                        <label htmlFor="tarjeta">Pago con Tarjeta</label>
                    </div>
                </div>
            </div>
            <Link className='btn-completar' to='/completa'>
                <button className={buttonClasses}>Completar Orden</button>
			</Link>
            
        </div>
    );
}

export default Checkout;
