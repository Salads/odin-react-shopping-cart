import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { createMemoryRouter, RouterProvider } from "react-router";

import NavBar from "../src/components/NavBar";
import { MemoryRouter } from "react-router";

describe("NavBar Component", () => {
	test("Renders Home Link", () => {
		let mockFn = vi.fn();
		render(
			<MemoryRouter>
				<NavBar isLightTheme={true} toggleTheme={mockFn} totalCartItems={0} />
			</MemoryRouter>
		);

		expect(screen.getByText("Home")).toBeInTheDocument();
	});

	test("Renders Shop Link", () => {
		let mockFn = vi.fn();
		render(
			<MemoryRouter>
				<NavBar isLightTheme={true} toggleTheme={mockFn} totalCartItems={0} />
			</MemoryRouter>
		);

		expect(screen.getByText("Shop")).toBeInTheDocument();
	});

	test("Renders Cart Link", () => {
		let mockFn = vi.fn();
		render(
			<MemoryRouter>
				<NavBar isLightTheme={true} toggleTheme={mockFn} totalCartItems={0} />
			</MemoryRouter>
		);

		const cartLink = screen.getByRole("link", { name: /cart/i });
		expect(cartLink).toBeInTheDocument();
		expect(cartLink.getAttribute("href")).toContain("cart");
	});

	test("Renders Theme Toggle", () => {
		let mockFn = vi.fn();
		render(
			<MemoryRouter>
				<NavBar isLightTheme={true} toggleTheme={mockFn} totalCartItems={0} />
			</MemoryRouter>
		);

		const cartLink = screen.getByRole("button", { name: /ToggleTheme/i });
		expect(cartLink).toBeInTheDocument();
	});
});