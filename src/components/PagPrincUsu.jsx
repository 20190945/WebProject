import React from "react";
import { Link } from "react-router-dom";
import '../Alumno3y4/PagPrincUsu.css'
import Footer from '../components/Footer'
import Header from '../components/Header'

function PagPrincUsu(){
    return(
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
        
        <main className="main">
        <section className="orders">
          <h2>Órdenes Recientes</h2>
          <div className="filters">
            <label htmlFor="sort-by-date">Ordenar por fecha:</label>
            <select id="sort-by-date">
              <option value="oldest-first">Más antiguas primero</option>
              <option value="newest-first">Más recientes primero</option>
            </select>
          </div>
          <ul className="order-list">
            <li className="order">
              <div className="order-info">
                <span className="order-number">Orden Nro. 12345232</span>
                <span className="order-date">Fecha: 12 de febrero de 2022</span>
                <span className="order-total">Total: S/122.00</span>
              </div>
              <div className="order-actions">
                <button className="btn btn-primary">Ver Detalle</button>
              </div>
            </li>
            <li className="order">
              <div className="order-info">
                <span className="order-number">Orden Nro. 12345232</span>
                <span className="order-date">Fecha: 12 de febrero de 2022</span>
                <span className="order-total">Total: S/122.00</span>
              </div>
              <div className="order-actions">
                <button className="btn btn-primary">Ver Detalle</button>
              </div>
            </li>
            <li className="order">
              <div className="order-info">
                <span className="order-number">Orden Nro. 12345232</span>
                <span className="order-date">Fecha: 12 de febrero de 2022</span>
                <span className="order-total">Total: S/122.00</span>
              </div>
              <div className="order-actions">
                <button className="btn btn-primary">Ver Detalle</button>
              </div>
            </li>
            <li className="order">
              <div className="order-info">
                <span className="order-number">Orden Nro. 12345232</span>
                <span className="order-date">Fecha: 12 de febrero de 2022</span>
                <span className="order-total">Total: S/122.00</span>
              </div>
              <div className="order-actions">
                <button className="btn btn-primary">Ver Detalle</button>
              </div>
            </li>
          </ul>
          <div className="pagination">
            <button className="btn btn-secondary">Anterior</button>
            <span>1</span>
            <span>2</span>
            <span>3</span>
            <span className="ellipsis">...</span>
            <span>4</span>
            <span>5</span>
            <span>11</span>
            <button className="btn btn-secondary">Siguiente</button>
          </div>
        </section>
        </main>

        <Footer/>
        </>
    )
}

export default PagPrincUsu;