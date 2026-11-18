// tests/routing.test.jsx
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";

import routes from "../src/Routes.jsx";

const testProduct = {
	id: 1,
	title: "Test Widget",
	image: "https://example.com/widget.png",
	price: 3.50,
	category: "widgets",
	description: "A widget for testing.",
	rating: { rate: 4.5, count: 12 },
};

function renderApp(initialEntries = ["/"]) {
	const router = createMemoryRouter(routes, { initialEntries });
	render(<RouterProvider router={router} />);
	return router;
}

beforeEach(() => {
	vi.stubGlobal("fetch", vi.fn(() =>
		Promise.resolve({ ok: true, json: () => Promise.resolve([testProduct]) })
	));
});

afterEach(() => {
	vi.unstubAllGlobals();
});

test("Navigate to Shop", async () => {
	const router = renderApp();
	fireEvent.click(screen.getByRole("link", { name: "Shop" }));

	await waitFor(() => expect(router.state.location.pathname).toBe("/shop"));
});

test("Navigate to Home", async () => {
	const router = renderApp(["/shop"]);
	fireEvent.click(screen.getByRole("link", { name: "Home" }));

	await waitFor(() => expect(router.state.location.pathname).toBe("/"));
});

test("Navigate to Cart", async () => {
	const router = renderApp();
	fireEvent.click(screen.getByRole("link", { name: /cart/i })); // needs alt="Cart" on the img

	await waitFor(() => expect(router.state.location.pathname).toBe("/cart"));
});