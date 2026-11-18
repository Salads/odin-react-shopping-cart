import { describe, test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "../src/components/Footer";

test("Other Links Section Has Everything", () => {
	render(<Footer />);

	expect(screen.getByText("Other Links")).toBeInTheDocument();
	expect(screen.getByText("About Us")).toBeInTheDocument();
	expect(screen.getByText("Careers")).toBeInTheDocument();
	expect(screen.getByText("Support")).toBeInTheDocument();
});

test("Contact Us Section Has Everything", () => {
	render(<Footer />);

	expect(screen.getByText("Contact Us")).toBeInTheDocument();
	expect(screen.getByText("coolemail@email.com")).toBeInTheDocument();
	expect(screen.getByText("(555)-123-4568")).toBeInTheDocument();
});
