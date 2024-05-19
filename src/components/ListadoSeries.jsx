import React from "react";
import { Link } from "react-router-dom";
import '../components/ListadoSeries.css'
import Footer from '../components/Footer'
import Header from '../components/Header'

function ListadoSeries(){
    
    const [searchTerm, setSearchTerm] = useState('');
    const products = [
        // Suponiendo que hay una lista de productos
        { id: 1, name: "Serie 1", description: "Descripción 1", creationDate: "2023-01-01", productCount: 10 },
        { id: 2, name: "Serie 2", description: "Descripción 2", creationDate: "2023-02-01", productCount: 8 },
        // Agrega más productos según sea necesario
    ];

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    
    const filteredProducts = products.filter((product) =>
        product.id.toString().includes(searchTerm) ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
          <Header/>
   
          <div id="lateralAdmin">
            <aside>
              <h3>ADMIN</h3>
              <dt id="dashboard">Dashboard</dt>
              <dt id="usuarios-registrados">Usuarios Registrados</dt>
              <dt id="productos">Productos</dt>
              <dt id="ordenes">Órdenes</dt>
              <dt id="productos-mas">Productos más vendidos</dt>
              <dt id="series">Series</dt>
            </aside>
          
   
          <div>
            <a href="#dashboard">Ir a Dashboard</a>
            <br />
            <a href="#usuarios-registrados">Ir a Usuarios Registrados</a>
            <br />
            <a href="#productos">Ir a Productos</a>
            <br />
            <a href="#ordenes">Ir a Órdenes</a>
            <br />
            <a href="#productos-mas">Ir a Productos más vendidos</a>
            <br />
            <a href="#series">Ir a Series</a>
          </div>
          </div>

          <div id="serie">
          <h3>Series</h3>
          <input
            type="text"
            placeholder="Buscar por ID, Nombre o Descripción"
            value={searchTerm}
            onChange={handleSearchChange}
            className="search-input"
          />
          <table className="series-table">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Nombre</th>
                  <th>Descripción</th>
                  <th>Fecha de Creación</th>
                  <th>Nro. Productos</th>
                  <th>Acciones</th>
                </tr>
              </thead>
              <tbody>
                {filteredProducts.map((product) => (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                    <td>{product.description}</td>
                    <td>{product.creationDate}</td>
                    <td>{product.productCount}</td>
                    <td>
                      {/* Aquí puedes agregar botones u otros elementos para las acciones */}
                      <button>Editar</button>
                      <button>Eliminar</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
          <Footer/>
        </>
    )
}

export default ListadoSeries;
