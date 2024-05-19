import React from 'react';
import './Usuarios.css'


function Usuarios(){
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
            <div class='primeraClaseUsuarios'>
                <p>Usuarios Registrados</p>
            </div>
            <div>
                <input class="buscadorUsuarios" type="text" placeholder="Buscar por correo, nombre o apellidos..." id="buscador" name="buscador"/>
            </div>
            <div class="principal">
                <table>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Correo</th>
                        <th>Fecha de Registro</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Antonio</td>
                        <td>Lopez</td>
                        <td>correo@sanchez.com</td>
                        <td>11/02/2024</td>
                        <td>Inactivo</td>
                        <td>Ver | Activar</td>
                    </tr>
                    <tr>
                        <td>1234</td>
                        <td>Anita</td>
                        <td>Sanchez</td>
                        <td>anita12@correo.com</td>
                        <td>02/02/2023</td>
                        <td>Activo</td>
                        <td>Ver | Desactivar</td>
                    </tr>
                </table>
            </div>
        </div>
    </body>
    )
}

export default Usuarios