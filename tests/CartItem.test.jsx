import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import CartItem from "../src/components/CartItem";

let mock = {
	item: { 
		id: 1, 
		price: 10.1, quantity: 2, 
		image: "coolimage.com/image.jpg", 
		title: "Cool Product"
	},
	
	setCartItemQuantity: vi.fn(), removeCartItem: vi.fn()
};

test("Title, Image, Total Price are correct", () => {
	render(<CartItem {...mock} />);

	expect(screen.getByText(mock.item.title)).toBeInTheDocument();

	expect(screen.getByTestId("cart-item-image")).toHaveAttribute("src", mock.item.image);

	let totalPrice = (mock.item.price * mock.item.quantity).toFixed(2);
	expect(screen.getByText(`\$${totalPrice}`)).toBeInTheDocument();

});