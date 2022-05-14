import SetTouchpadButton from "./SetTouchpadButton";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

//tests the Set Touchpad button to make sure it renders with correct text

describe("Renders Set Touchpad Button and check text", () => {
    test('button renders',() => {
        render(<SetTouchpadButton/>, {wrapper: BrowserRouter})
        expect(screen.getByLabelText("confirmMode").textContent).toEqual("Confirm Touchpad Assignments")          
    });
})