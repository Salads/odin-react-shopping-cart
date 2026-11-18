import ItemCartButton from './ItemCartButton.jsx';

function CartItem({item, setCartItemQuantity, removeCartItem}) {

	let totalPrice = item.price ? item.price * item.quantity : 0;

	return (
		<div className="flex flex-row gap-8">
			<div className="flex flex-row gap-4 flex-1">
				<img src={item.image} className='w-12 h-auto' data-testid="cart-item-image" />
				<p>{item.title}</p>
			</div>
			<div className="flex flex-col">
				<ItemCartButton
					productId={item.id}
					quantity={item.quantity}
					setCartItemQuantity={setCartItemQuantity} 
					removeCartItem={removeCartItem} />
				<p>${totalPrice.toFixed(2)}</p>
			</div>
		</div>
	);
}

export default CartItem;