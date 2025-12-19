import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders Hello World", () => {
	render(<App />);
	// getByText throws if not found => test fails
	screen.getByText(/hello world/i);
});
