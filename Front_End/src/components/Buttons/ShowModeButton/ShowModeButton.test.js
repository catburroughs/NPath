import ShowModeButton from "./ShowModeButton";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe("ShowModeButton", () => {
    test('button renders and link renders',() => {
        render(<ShowModeButton/>, {wrapper: BrowserRouter})
        let link = screen.getByRole('link')
        expect(link).toHaveAttribute('href',"/AssignTouchpads")
        expect((link).textContent).toEqual("Assign Touchpads")   
    });

})