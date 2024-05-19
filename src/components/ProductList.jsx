import React from 'react';
import { Link } from 'react-router-dom';
import { productData } from '../productData';
import { collectionData } from '../collectionData';

function ProductList({
	allProducts,
	setAllProducts,
	countProducts,
	setCountProducts,
	total,
	setTotal,
}) {
	const containersConfig = [
		{ id: 1, type: 'collection', itemsPerContainer: 3, showNewItems: false, showBestSellers: true },
		{ id: 2, type: 'product', itemsPerContainer: 10, showNewItems: false, showBestSellers: true },
		{ id: 3, type: 'collection', itemsPerContainer: 3, showNewItems: true, showBestSellers: false },
		{ id: 4, type: 'product', itemsPerContainer: 5, showNewItems: true, showBestSellers: false },
	];

	const onAddProduct = (product, e) => {
		e.stopPropagation();
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
		<div>
			{containersConfig.map(container => {
				if (container.type === 'product') {
					let filteredProducts = productData;
					if (container.showNewItems) {
						filteredProducts = filteredProducts.filter(product => product.isNew);
					}
					if (container.showBestSellers) {
						filteredProducts = filteredProducts.filter(product => product.isBestSeller);
					}
					return (
						<div key={container.id} className='container-items'>
							{filteredProducts.slice(0, container.itemsPerContainer).map(product => (
								<div key={product.id} className='item'>
									<Link to={`/product/${product.id}`} style={{ textDecoration: 'none', color: 'black' }}>
										<figure>
											<img src={product.img} alt={product.nameProduct} />
										</figure>
										<div className='info-product'>
											<h2>{product.nameProduct}</h2>
										</div>
									</Link>
									<div className='info-product'>
										<p className='price'>${product.price}</p>
										<button onClick={(e) => onAddProduct(product, e)}>
											Añadir al carrito
										</button>
									</div>
								</div>
							))}
						</div>
					);
				} else if (container.type === 'collection') {
					let filteredCollections = collectionData;
					if (container.showNewItems) {
						filteredCollections = filteredCollections.filter(collection => collection.isNew);
					}
					if (container.showBestSellers) {
						filteredCollections = filteredCollections.filter(collection => collection.isBestSeller);
					}
					return (
						<div key={container.id} className='container-collections'>
							{filteredCollections.slice(0, container.itemsPerContainer).map(collection => (
								<Link to={`/collection/${collection.id}`} key={collection.id} className='grupo' style={{ textDecoration: 'none', color: 'black' }}>
									<figure>
										<img src={collection.img} alt={collection.nameCollection} />
									</figure>
									<div className='info-collection'>
										<h2>{collection.nameCollection}</h2>
										<p className='descripcion'>Learn More</p>
									</div>
								</Link>
							))}
						</div>
					);
				} else {
					return null;
				}
			})}
		</div>
	);
}

export default ProductList;