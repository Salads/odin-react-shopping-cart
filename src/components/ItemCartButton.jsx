import { useState } from 'react';

import deleteSVG from '../assets/delete.svg';

function ItemCartButton(props) {

	function onClickAddToCart(e) {
		props.setCartItemQuantity(props.productId, props.quantity + 1);
	}

	function onClickSubtractFromCart(e) {
		props.setCartItemQuantity(props.productId, props.quantity - 1);
	}

	let buttonSize = "size-6";

	let border;
	let bgColor = "bg-red-200";
	let internals;
	if(props.quantity <= 0) {
		bgColor = "bg-amber-300";
		internals = (
			<button onClick={onClickAddToCart}>Add to Cart</button>
		);
	}
	else if(props.quantity >= 1) {
		bgColor = "bg-white-200";
		border = "border";
		
		if(props.quantity === 1){
			internals = (
			<>
				<button className={`${buttonSize}`} onClick={onClickSubtractFromCart}><img src={deleteSVG}/></button>
				<p className='mx-8'>{props.quantity}</p>
				<button  className={`${buttonSize}`} onClick={onClickAddToCart}>+</button>
			</>
		);
		}
		else {
			internals = (
				<>
					<button  className={`${buttonSize}`} onClick={onClickSubtractFromCart}>-</button>
					<p className='mx-8'>{props.quantity}</p>
					<button  className={`${buttonSize}`} onClick={onClickAddToCart}>+</button>
				</>
			);
		}
	}

	return (
		<div className={`flex flex-row justify-between ${border} ${bgColor} rounded-xl px-3`}>
			{internals}
		</div>
	);
}

export default ItemCartButton;