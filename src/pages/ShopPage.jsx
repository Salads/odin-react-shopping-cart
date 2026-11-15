import { useState, useEffect } from 'react';
import { useOutletContext } from 'react-router';

import ShopItem from '../components/ShopItem.jsx';

function generateStoreItem(productData, cartItems, callbacks) {
	let quantity = 0;
	let cartItem = cartItems.find((elem) => elem.id === productData.id);
	if(cartItem) { quantity = cartItem.quantity; }

	return <ShopItem 
				key={productData.id} 
				productData={productData} 
				quantity={quantity} 
				cartCallbacks={callbacks}/>
}

function ShopPage(props) {
	const {products, cartItems, setCartItemQuantity, removeCartItem} = useOutletContext();

	return (
		<div className='grid grid-cols-3 gap-6 m-16 px-64'>
			{products.map((data) => generateStoreItem(data, cartItems, {
				setCartItemQuantity, 
				removeCartItem
			}))}
		</div>
	);
}

export default ShopPage;