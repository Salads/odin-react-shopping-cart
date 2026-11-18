import { render, screen } from "@testing-library/react";
import ItemCartButton from "../src/components/ItemCartButton.jsx";

describe("Starts -> No Items Added Yet", () => {
	test("Renders 'Add to Cart'", () => {
		let mock = { setCartItemQuantity: vi.fn(), productId: 1, quantity: 0 };
		render(<ItemCartButton {...mock} />);

		let elem = screen.getByText("Add to Cart");
		expect(elem).toBeInTheDocument();
	});

	test("Click Sends Quantity +1", () => {
		let mock = { setCartItemQuantity: vi.fn(), productId: 1, quantity: 0 };
		render(<ItemCartButton {...mock} />);

		let elem = screen.getByText("Add to Cart");
		elem.click();
		expect(mock.setCartItemQuantity).toHaveBeenCalledWith(mock.productId, mock.quantity + 1);
	});
});

describe("Starts >= 1 Item Added", () => {
	describe("1 Item", () => {
		test("Trash, Current Items = 1, + Button Renders", () => {
			let mock = { setCartItemQuantity: vi.fn(), productId: 1, quantity: 1 };
			render(<ItemCartButton {...mock} />);

			expect(screen.getByRole("img")).toBeInTheDocument();
			expect(screen.getByText(String(mock.quantity))).toBeInTheDocument();
			expect(screen.getByText("+")).toBeInTheDocument();
		});

		test("Clicking Trash Sends Callback(quantity--)", () => {
			let mock = { setCartItemQuantity: vi.fn(), productId: 1, quantity: 1 };
			render(<ItemCartButton {...mock} />);

			let trashButton = screen.getByTestId("trash-button");
			trashButton.click();

			expect(mock.setCartItemQuantity).toHaveBeenCalledWith(mock.productId, mock.quantity - 1);
		});

		test("Clicking Trash Sends Callback(quantity++)", () => {
			let mock = { setCartItemQuantity: vi.fn(), productId: 1, quantity: 1 };
			render(<ItemCartButton {...mock} />);

			let plusButton = screen.getByText("+");
			plusButton.click();

			expect(mock.setCartItemQuantity).toHaveBeenCalledWith(mock.productId, mock.quantity + 1);
		});
	});

	describe("1+ Items", () => {
		test("- Button, Current Items, + Button Renders", () => {
			let mock = { setCartItemQuantity: vi.fn(), productId: 1, quantity: 2 };
			render(<ItemCartButton {...mock} />);

			expect(screen.getByText("-")).toBeInTheDocument();
			expect(screen.getByText(String(mock.quantity))).toBeInTheDocument();
			expect(screen.getByText("+")).toBeInTheDocument();
		});

		test("Clicking Trash Sends Callback(quantity--)", () => {
			let mock = { setCartItemQuantity: vi.fn(), productId: 1, quantity: 2 };
			render(<ItemCartButton {...mock} />);

			let minusButton = screen.getByText("-");
			minusButton.click();

			expect(mock.setCartItemQuantity).toHaveBeenCalledWith(mock.productId, mock.quantity - 1);
		});

		test("Clicking Trash Sends Callback(quantity++)", () => {
			let mock = { setCartItemQuantity: vi.fn(), productId: 1, quantity: 2 };
			render(<ItemCartButton {...mock} />);

			let plusButton = screen.getByText("+");
			plusButton.click();

			expect(mock.setCartItemQuantity).toHaveBeenCalledWith(mock.productId, mock.quantity + 1);
		});
	});
});