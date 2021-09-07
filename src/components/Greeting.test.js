import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Greeting from "./Greeting";

// Suite
describe('Greeting component', () => {
    test('renders Hello World as a text', () => {
        // Arrange
        render(<Greeting/>);
        // Action
    
        // Assert
        const element = screen.getByText('Hello World', { exact: false });
        expect(element).toBeInTheDocument();
    });

    test('renders Good to see you if a button is not clicked', () => {
        render(<Greeting/>);
        const element = screen.getByText('Good to see you');
        expect(element).toBeInTheDocument();
    });

    test('renders Changed! if a button is clicked', () => {
        render(<Greeting/>);
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        const element = screen.getByText('Changed!');
        expect(element).toBeInTheDocument();
    });

    test('does not render good to see you if a button is not clicked', () => {
        render(<Greeting/>);
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);
        const element = screen.queryByText('good to see you!');
        expect(element).toBeNull();
    });
});
