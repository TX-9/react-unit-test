import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe('Async component', () => {
    test('renders posts if request succeeds', async () => {
        render(<Async/>);
        const listItemElements = await screen.findAllByRole('listitem'); // return Promise
        expect(listItemElements).not.toHaveLength(0);
    })
    test('renders posts if request succeeds with Mock', async () => {
        window.fetch = jest.fn();
        window.fetch.mockResolvedValueOnce({
            json: async () => [{id: 'p1', title: 'first post'}]
        });
        render(<Async/>);
        const listItemElements = await screen.findAllByRole('listitem'); // return Promise
        expect(listItemElements).not.toHaveLength(0);
    })
});