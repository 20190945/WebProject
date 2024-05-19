import React from 'react';
import './Dashboard.css'


function Dashboard(){
    return(
        <body>
        <div>
            <div class='sidebar'>
                <h4>Admin</h4>
                <p><a href='#'>Dashboard</a></p>
                <p><a href='./Usuarios.jsx'>Usuarios registrados</a></p>
                <p><a href='./Productos.jsx'>Productos</a></p>
                <p><a href='./Ordenes.jsx'>Órdenes</a></p>
                <p><a href='#'>Productos más vendidos</a></p>
                <p><a href='#'>Series</a></p>
            </div>
            <div class='primeraClaseDashboard'>
                <p>Dashboard
                <a href='#'>Cambiar Fecha o Periodo</a></p>
            </div>
            <div>
                <div class='datos1'>
                    <p class='principal'>68</p>
                    <p>Órdenes del día de hoy</p>
                </div>
                <div class='datos2'>
                    <p class='principal'>12</p>
                    <p>Usuarios nuevos</p>
                </div>
                <div class='datos3'>
                    <p class='principal'>S/ 13,500.00</p>
                    <p>Ingresos de hoy</p>
                </div>
            </div>
        </div>
    </body>
    )
}

export default Dashboard