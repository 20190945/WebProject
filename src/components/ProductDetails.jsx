import React, { useState } from 'react';
import Header from './Header'
import Footer from './Footer'
import { useParams } from 'react-router-dom';
import { productData } from '../productData';

function ProductDetails() {
    const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

    // Obtener el parámetro de la URL que corresponde al ID del producto
    const { id } = useParams();
    
    // Encontrar el producto en la data utilizando el ID
    const product = productData.find(item => item.id === parseInt(id));

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

    return (
        <>
            <Header 
                allProducts={allProducts}
			    setAllProducts={setAllProducts}
			    total={total}
			    setTotal={setTotal}
			    countProducts={countProducts}
			    setCountProducts={setCountProducts}
                onAddProduct={onAddProduct}
            />
            <br />
            <div>
                <h1>{product.nameProduct}</h1>
                <p>Por: {product.por}</p>
                <div>
                    <img src={product.img} alt={product.nameProduct} />
                    <div style={{ marginLeft: '20px' }}>
                        <div className="product-info-box">
                            <h3>{product.isAvailable ? "Disponible" : "No Disponible"}</h3>
                            <p>${product.price}</p>
                            <button onClick={() => onAddProduct(product)}>Añadir al carrito</button>
                        </div>
                    </div>
                </div>
                <hr />
                <h2>Detalles del producto</h2>
                <div className='detalles'>
                    <p>{product.description}</p>
                </div>
            </div>
            <br />
            <Footer/>
        </>
    );    
}

export default ProductDetails;