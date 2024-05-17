import { useState } from 'react';
import Header from "./Header";
import ProductList from "./ProductList";

function Inicio() {
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
		<ProductList
			allProducts={allProducts}
			setAllProducts={setAllProducts}
			total={total}
			setTotal={setTotal}
			countProducts={countProducts}
			setCountProducts={setCountProducts}
		/>
      </>
    )
  }
  
  export default Inicio;