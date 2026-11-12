import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router';

import ShopItem from '../components/ShopItem.jsx';

function generateStoreItem(productData) {
	return <ShopItem data={productData}/>
}

function ShopPage(props) {
	const [products, addOrUpdateCartItem, removeCartItem] = useOutletContext();

	return (
		<div className='grid grid-cols-3 gap-6 m-16 px-64'>
			{products.map((data) => generateStoreItem(data))}
		</div>
	);
}

export default ShopPage;