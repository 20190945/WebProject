import React, { useState } from 'react';
import Header from './Header'

function Mas_vendidos() {
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
      <div>Mas vendidos</div>
    </>
  )
}

export default Mas_vendidos