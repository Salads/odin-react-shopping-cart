import { useState } from 'react';
import ItemCartButton from './ItemCartButton.jsx';

import ratingStar from '../assets/star-svgrepo-com.svg';

function ShopItem({productData, quantity, cartCallbacks}) {

	return (
		<div className={`
			flex flex-col items-center 
			border-solid border-gray-400 border-2 rounded-xl
			max-w-96
			px-8 py-4
			bg-white
			gap-4
		`} data-id={productData.id}>
			<img src={productData.image} className='h-48 w-auto'/>
			<p className='text-center'>{productData.title}</p>
			<div className='flex flex-row justify-around w-full'>
				<div className='flex flex-row gap-1'>
					<img src={ratingStar} className='size-4 self-center'/>
					<p>{productData.rating.rate}</p>
					<p>({productData.rating.count})</p>
				</div>
				<p>{productData.category}</p>
			</div>
			<div className='flex-1'>
				<p className='mb-6 line-clamp-4' title={productData.description}>{productData.description}</p>
			</div>
			<div className='flex flex-row items-end justify-between w-full'>
				<p className='self-center'>${productData.price}</p>
				<ItemCartButton 
					productId={productData.id}
					quantity={quantity}
					setCartItemQuantity={cartCallbacks.setCartItemQuantity} 
					removeCartItem={cartCallbacks.removeCartItem} />
			</div>
		</div>
	);
}

export default ShopItem;