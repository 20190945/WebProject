import React from "react";
import { Link } from "react-router-dom";
import '../components/AgregarSerie.css'
import Footer from '../components/Footer'
import Header from '../components/Header'

function AgregarSerie() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const [productos, setProductos] = useState([]);
  const [nuevoProducto, setNuevoProducto] = useState({ id: '', descripcion: '' });

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedImage) {
      console.log("Imagen seleccionada:", selectedImage);
    } else {
      console.log("No se ha seleccionado ninguna imagen.");
    }
  };

  const handleAddProduct = (event) => {
    event.preventDefault();
    if (nuevoProducto.id && nuevoProducto.descripcion) {
      setProductos([...productos, nuevoProducto]);
      setNuevoProducto({ id: '', descripcion: '' });
    }
  };

  const handleRemoveProduct = (index) => {
    setProductos(productos.filter((_, i) => i !== index));
  };

  return (
    <>
      <Header />

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

      <div className="main-content">
        <div className='serie'>
          <h2>Agregar Serie</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <div>
                <input type="file" accept="image/*" onChange={handleImageChange} />
                <button type="submit">Agregar Imagen</button>
              </div>
              {preview && (
                <div>
                  <h3>Vista previa de la imagen:</h3>
                  <img src={preview} alt="Vista previa" />
                </div>
              )}
            </div>
            <div id='nomdes'>
              <label htmlFor="idnombre">Nombre </label>
              <br/>
              <input type="text" id="idnombre" required />

              <label htmlFor="iddescripcion">Descripción </label>
              <br/>
              <input type="text" id="iddescripcion" required />
            </div>
          </form>
        </div>

        <div className='productos-serie'>
          <h2>Productos en la serie</h2>
          <form onSubmit={handleAddProduct}>
            <input 
              type="text" 
              placeholder="ID del producto" 
              value={nuevoProducto.id} 
              onChange={(e) => setNuevoProducto({ ...nuevoProducto, id: e.target.value })} 
            />
            <input 
              type="text" 
              placeholder="Descripción del producto" 
              value={nuevoProducto.descripcion} 
              onChange={(e) => setNuevoProducto({ ...nuevoProducto, descripcion: e.target.value })} 
            />
            <button type="submit">Agregar Producto</button>
          </form>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>Descripción</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((producto, index) => (
                <tr key={index}>
                  <td>{producto.id}</td>
                  <td>{producto.descripcion}</td>
                  <td>
                    <button onClick={() => handleRemoveProduct(index)}>Remover</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <button type='submit'>Guardar</button>
      </div>

      <Footer />
    </>
  );
}

export default AgregarSerie;
