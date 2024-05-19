import React, { useState } from 'react';
import Header from './Header'
import Footer from './Footer'

function CollectionDetails() {
  const [allProducts, setAllProducts] = useState([]);
	const [total, setTotal] = useState(0);
	const [countProducts, setCountProducts] = useState(0);

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
      <br />
      <div>Detalles del producto</div>
      <br />
      <Footer/>
    </>
  )
}

export default CollectionDetails