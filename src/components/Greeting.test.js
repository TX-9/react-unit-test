import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";

test('renders Hello World as a text', () => {
    // Arrange
    render(<Greeting/>);
    // Action

    // Assert
    const element = screen.getByText('Hello World', { exact: false });
    expect(element).toBeInTheDocument();
});