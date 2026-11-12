import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router';

import ShopItem from '../components/ShopItem.jsx';

function generateStoreItem(productData) {
	return <ShopItem data={productData}/>
}

function ShopPage(props) {
	const [products, addOrUpdateCartItem, removeCartItem] = useOutletContext();

	return (
		<div className='grid grid-cols-4 gap-6 m-16'>
			{products.map((data) => generateStoreItem(data))}
		</div>
	);
}

export default ShopPage;