import { describe, test, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

import ShopItem from "../src/components/ShopItem.jsx";

let mockData = {
	productData: {
		id: 1, image: "www.google.com/cool-image",
		title: "product title", description: "description cool thing",
		rating: {rate: 3.5, count: 500},
		category: "cool category",
		price: 9.99
	},

	quantity: 3, 
	cartCallbacks: { setCartItemQuantity: vi.fn(), removeCartItem: vi.fn() }
};

test("data-id set to product id", () => {
	render(<ShopItem {...mockData} />);
	
	let containerDiv = screen.getByLabelText(`ShopItem ${mockData.productData.title}`);
	expect(containerDiv).toHaveAttribute("data-id", String(mockData.productData.id));
});

test("product image set", () => {
	render(<ShopItem {...mockData} />);
	
	let img = screen.getByLabelText("product image");
	expect(img).toHaveAttribute("src", mockData.productData.image);
});

test("product title set", () => {
	render(<ShopItem {...mockData} />);
	
	let img = screen.getByText(mockData.productData.title);
	expect(img).toBeInTheDocument();
});

test("rating image exists", () => {
	render(<ShopItem {...mockData} />);
	
	let img = screen.getByTestId("rating-img");
	expect(img).toBeInTheDocument();
});

test("rating score set", () => {
	render(<ShopItem {...mockData} />);
	
	let elem = screen.getByTestId("rating-score");
	expect(elem).toHaveTextContent(`${mockData.productData.rating.rate}`);
});

test("rating score count set", () => {
	render(<ShopItem {...mockData} />);
	
	let elem = screen.getByTestId("rating-count");
	expect(elem).toHaveTextContent(`(${mockData.productData.rating.count})`);
});

test("category set", () => {
	render(<ShopItem {...mockData} />);
	
	let elem = screen.getByTestId("category");
	expect(elem).toHaveTextContent(mockData.productData.category);
});

test("description set", () => {
	render(<ShopItem {...mockData} />);
	
	let elem = screen.getByText(mockData.productData.description);
	expect(elem).toBeInTheDocument();
});

test("price set", () => {
	render(<ShopItem {...mockData} />);
	
	let elem = screen.getByText(`\$${mockData.productData.price}`);
	expect(elem).toBeInTheDocument();
});