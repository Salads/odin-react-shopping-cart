import { useOutletContext, Link } from "react-router";
import CartItem from "../components/CartItem";

function generateContents(cartItems, setCartItemQuantity, removeCartItem) {
	let result = { detailItems: [], summaryLabels: [], summaryTotals: [], totalPrice: 0 }

	for(let cartItem of cartItems) {

		let unitPrice = Number(cartItem.price);
		let totalPrice = unitPrice * cartItem.quantity;
		result.totalPrice += totalPrice;

		result.detailItems.push(<CartItem 
									item={cartItem} 
									setCartItemQuantity={setCartItemQuantity} 
									removeCartItem={removeCartItem}/>);

		result.summaryLabels.push(
			<p>x{cartItem.quantity} {cartItem.title} (${unitPrice.toFixed(2)})</p>
		);
		
		result.summaryTotals.push(
			<p>${totalPrice.toFixed(2)}</p>
		);
	}

	return result;
}

function CartPage() {
	const {cartItems, setCartItemQuantity, removeCartItem} = useOutletContext();

	if(cartItems.length <= 0) {
		return (
			<div className="flex flex-col flex-1 items-center justify-center w-full h-full gap-4">
				<p className="w-fit h-fit text-center">No Items in Cart!</p>
				<Link to="../shop"><button className="btn-primary">Back To Shop</button></Link>
			</div>
		);
	}

	let contents = generateContents(cartItems, setCartItemQuantity, removeCartItem);
	
	return (
		<div className="flex flex-row align-center justify-center w-full px-12 py-8 gap-16">
			<div className="flex flex-col">
				{contents.detailItems}
			</div>
			<div className="flex flex-col gap-12">
				<div className="flex flex-row sticky top-0 gap-10">
					<div className="flex flex-col">
						{contents.summaryLabels}
						<p className="text-2xl">Total:</p>
					</div>
					<div className="flex flex-col">
						{contents.summaryTotals}
						<p className="text-2xl">${contents.totalPrice}</p>
					</div>
				</div>
				<button className="btn-primary">Checkout</button>
			</div>
		</div>
	);
}

export default CartPage;