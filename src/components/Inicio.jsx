import React, { useState } from 'react';
import Header from "./Header";
import ProductList from "./ProductList";
import Buscador from "./Buscador";
import { productData } from '../productData';


function Inicio() {
    const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);
	const [consulta, setConsulta] = useState('');
	const [productosFiltrados, setProductosFiltrados] = useState(productData);

	const busqueda = () => {
		const resultados = data.filter(product =>
			product.nameProduct.toLowerCase().includes(consulta.toLowerCase())
		);
		setProductosFiltrados(resultados);
	};

    return (
      <>
        <Header
			allProducts={allProducts}
			setAllProducts={setAllProducts}
			total={total}
			setTotal={setTotal}
			countProducts={countProducts}
			setCountProducts={setCountProducts}
		/>
		<br/>
		<Buscador 
			consulta={consulta} 
			setConsulta={setConsulta}
			onSearch={busqueda}
		/>
		<br/>
		<ProductList
			allProducts={allProducts}
			setAllProducts={setAllProducts}
			total={total}
			setTotal={setTotal}
			countProducts={countProducts}
			setCountProducts={setCountProducts}
			products={productosFiltrados}
		/>
      </>
    )
  }
  
  export default Inicio;