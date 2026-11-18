import { useState } from 'react';

import deleteSVG from '../assets/delete.svg';

function ItemCartButton(props) {

	function onClickAddToCart(e) {
		props.setCartItemQuantity(props.productId, props.quantity + 1);
	}

	function onClickSubtractFromCart(e) {
		props.setCartItemQuantity(props.productId, props.quantity - 1);
	}

	let internals;
	if(props.quantity <= 0) {
		return(
			<button 
				onClick={onClickAddToCart} 
				className="btn-cart-shadow btn-cart-new text-black">Add to Cart</button>
		);
	}

	if(props.quantity === 1){
		internals = (
			<>
				<button className="btn-cart-sub" onClick={onClickSubtractFromCart} data-testid="trash-button"><img src={deleteSVG}/></button>
				<p className='mx-8 cursor-default text-black'>{props.quantity}</p>
				<button className="btn-cart-sub text-black" onClick={onClickAddToCart}>+</button>
			</>
		);
	}
	else {
		internals = (
			<>
				<button className="btn-cart-sub text-black" onClick={onClickSubtractFromCart}>-</button>
				<p className='mx-8 cursor-default text-black'>{props.quantity}</p>
				<button className="btn-cart-sub text-black" onClick={onClickAddToCart}>+</button>
			</>
		);
	}

	return (
		<div className="btn-cart-container">
			{internals}
		</div>
	);
}

export default ItemCartButton;