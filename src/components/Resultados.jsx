import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { productData } from '../productData'; // Importamos los datos de productos
import './resultados.css';
import Header from "./Header";
import Footer from "./Footer";

function Resultados() {
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);
    const location = useLocation();
    const [filteredProducts, setFilteredProducts] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 5; // Número de productos por página

    useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const opcion = searchParams.get('opcion');

        let newFilteredProducts = [];

        if (opcion === 'bestsellers') {
            newFilteredProducts = productData.filter(product => product.isBestSeller === true);
        } else if (opcion === 'new') {
            newFilteredProducts = productData.filter(product => product.isNew === true);
        } else if (opcion === 'offer') {
            newFilteredProducts = productData.filter(product => product.onOffer === true);
        }

        setFilteredProducts(newFilteredProducts);
    }, [location.search]);

    // Función para agregar un producto al carrito
    const onAddProduct = (product) => {
        if (allProducts.find(item => item.id === product.id)) {
            const updatedProducts = allProducts.map(item =>
                item.id === product.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            );
            setTotal(total + product.price);
            setCountProducts(countProducts + 1);
            return setAllProducts([...updatedProducts]);
        }

        setTotal(total + product.price);
        setCountProducts(countProducts + 1);
        setAllProducts([...allProducts, { ...product, quantity: 1 }]);
    };

    // Calcula el índice del último producto en la página actual
    const indexOfLastProduct = currentPage * productsPerPage;
    // Calcula el índice del primer producto en la página actual
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    // Obtiene los productos de la página actual
    const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

    // Calcula el número total de páginas
    const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

    // Cambia a una página específica
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <div>
            <Header
                allProducts={allProducts}
                setAllProducts={setAllProducts}
                total={total}
                setTotal={setTotal}
                countProducts={countProducts}
                setCountProducts={setCountProducts}
                onAddProduct={onAddProduct} // Pasamos la función onAddProduct al Header
            />
            <br />
            <h1>Resultados:</h1>
            <div className="product-container">
                {currentProducts.map(product => (
                    <div className="product-item" key={product.id}>
                        <div className="product-info">
                            <figure>
                                <img src={product.img} alt={product.nameProduct} />
                            </figure>
                            <div className="text-info">
                                <h2>{product.nameProduct}</h2>
                                <p>{product.description}</p>
                                <p className="price">${product.price}</p>
                                <button onClick={() => onAddProduct(product)}>Añadir al carrito</button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Botones de paginación */}
            <div className="pagination">
                <a href="#!" onClick={() => currentPage > 1 && paginate(currentPage - 1)}>&laquo;</a>
                {[...Array(totalPages).keys()].map(number => (
                    <a 
                        key={number + 1} 
                        href="#!" 
                        className={currentPage === number + 1 ? 'active' : ''} 
                        onClick={() => paginate(number + 1)}
                    >
                        {number + 1}
                    </a>
                ))}
                <a href="#!" onClick={() => currentPage < totalPages && paginate(currentPage + 1)}>&raquo;</a>
            </div>
            <br />
            <Footer/>
        </div>
    )
}

export default Resultados;