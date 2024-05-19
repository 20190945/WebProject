import React from 'react';
import './Productos.css'
import { productData } from '../productData';
import { collectionData } from '../collectionData';


function Productos(){



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
            <div class='primeraClaseProductos'>
                <p>Productos</p>
                <button class="agregar" id="agregarProd">+ Agregar Producto</button>
            </div>
            <div>
                <input class="buscadorProductos" type="text" placeholder="Buscar por Id, serie o detalle..." id="buscadorProd" name="buscador"/>
            </div>
            <div class="principal">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Detalle</th>
                        <th>Serie</th>
                        <th>Precio</th>
                        <th>Fecha de Registro</th>
                        <th>Stock</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                        <tr>
                        <td>1</td>
                        <td>Manga Sailor Moon Vl.3</td>
                        <td>Sailor Moon</td>
                        <td>30.90</td>
                        <td>11/02/2023</td>
                        <td>10</td>
                        <td>Activo</td>
                        <td>Ver | Desactivar</td>
                    </tr>
                    <tr>
                        <td>12</td>
                        <td>Manga Dragon Ball Vl.5</td>
                        <td>Dragon Ball</td>
                        <td>30.90</td>
                        <td>02/02/2023</td>
                        <td>10</td>
                        <td>Activo</td>
                        <td>Ver | Desactivar</td>
                    </tr>
                </table>
            </div>
        </div>
    </body>
    )
}

export default Productos