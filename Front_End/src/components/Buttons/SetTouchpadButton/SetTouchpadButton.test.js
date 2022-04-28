import SetTouchpadButton from "./SetTouchpadButton";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe("Renders Set Touchpad Button and check text", () => {
    test('button renders',() => {
        render(<SetTouchpadButton/>, {wrapper: BrowserRouter})
        expect(screen.getByLabelText("confirmMode").textContent).toEqual("Confirm Touchpad Assignments")
        expect(screen.getByLabelText("hideMode").textContent).toEqual("Click here after selecting your touchpads.")
          
    });
})//todo: make more tests to test onclick