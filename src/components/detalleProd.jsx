import React from 'react';
import './detalleProd.css'


function detalleProd(){
    return(
        <body>
        <div>
            <div class='sidebar'>
                <h4>Admin</h4>
                <p><a href='#'>Dashboard</a></p>
                <p><a href='#'>Usuarios registrados</a></p>
                <p><a href='#'>Productos</a></p>
                <p><a href='#'>Órdenes</a></p>
                <p><a href='#'>Productos más vendidos</a></p>
                <p><a href='#'>Series</a></p>
            </div>
            <div class='primeraClaseAgregarProducto'>
                <p>Agregar Producto</p>
            </div>
            <div class="principal">

                <div class="izProd">
                    <div class="imagen"></div>
                </div>

                <div class="drProd">
                    <form>
                        <p>Nombre</p>
                        <input type="text" name="nombreProd" id="nombreProd"/>

                        <p>Descripción</p>
                        <textarea id="descripProd" name="descripProd" rows="3"></textarea><br/>

                        <p>Características</p>
                        <textarea id="caractProd" name="caractProd" rows="5"></textarea><br/>

                        <div class="parte2">
                            <p>Marca</p>
                            <input type="text" name="marcaProd" id="marcaProd"/>

                            <p>Tipo</p>
                            <input type="text" name="tipoProd" id="tipoProd"/>
                        </div>

                        <div class="parte3">
                            <p>Serie</p>
                            <input type="text" name="serieProd" id="serieProd"/>

                            <p>Stock</p>
                            <input type="number" name="stockProd" id="stockProd"/>
                        </div>

                        <div class="parte4">
                            <p>Precio</p>
                            <label for="precioProd">S/ </label>
                            <input type="number" name="precioProd" id="precioProd"/>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    </body>
    )
}

export default detalleProd