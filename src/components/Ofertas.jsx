import React, { useState } from 'react';
import Header from './Header'

function Ofertas() {
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
      <div>Ofertas</div>
    </>
  )
}

export default Ofertas