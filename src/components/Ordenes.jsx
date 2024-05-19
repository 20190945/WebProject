import React from 'react';
import './Ordenes.css'


function Ordenes(){
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
            <div class='primeraClaseOrdenes'>
                <p>Órdenes</p>
            </div>
            <div>
                <input class="buscadorOrdenes" type="text" placeholder="Buscar nombre o apellido de usuario o nro de órden..." id="buscadorOrdenes" name="buscador"/>
            </div>
            <div class="principal">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Usuario</th>
                        <th>Fecha de Orden</th>
                        <th>Total</th>
                        <th>Correo</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Anita Sanchez</td>
                        <td>11/02/2024</td>
                        <td>128.90</td>
                        <td>anita12@correo.com</td>
                        <td>Entregado</td>
                        <td>Ver</td>
                    </tr>
                    <tr>
                        <td>123</td>
                        <td>Anita Sanchez</td>
                        <td>02/02/2023</td>
                        <td>38.50</td>
                        <td>anita12@correo.com</td>
                        <td>Entregado</td>
                        <td>Ver</td>
                    </tr>
                </table>
            </div>
        </div>
    </body>
    )
}

export default Ordenes