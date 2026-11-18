import { useState } from 'react';
import ItemCartButton from './ItemCartButton.jsx';

import ratingStar from '../assets/star-svgrepo-com.svg';

function ShopItem({productData, quantity, cartCallbacks}) {

	return (
		<div className={`
			flex flex-col items-center 
			border-solid border-(--color-border) border-2 rounded-xl
			max-w-96
			px-8 py-4
			bg-(--color-item-background)
			gap-4
		`} data-id={productData.id} aria-label={`ShopItem ${productData.title}`}>
			<img src={productData.image} aria-label='product image' className='h-48 w-auto'/>
			<p className='text-center'>{productData.title}</p>
			<div className='flex flex-row justify-around w-full'>
				<div className='flex flex-row gap-1'>
					<img src={ratingStar} className='size-4 self-center' data-testid="rating-img"/>
					<p data-testid="rating-score">{productData.rating.rate}</p>
					<p data-testid="rating-count">({productData.rating.count})</p>
				</div>
				<p data-testid="category">{productData.category}</p>
			</div>
			<div className='flex-1'>
				<p className='mb-6 line-clamp-4 text-(--color-text-secondary)' title={productData.description}>{productData.description}</p>
			</div>
			<div className='flex flex-row items-end justify-between w-full'>
				<p className='self-center' data-testid="product-price">${productData.price}</p>
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