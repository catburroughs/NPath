import ConfirmModeButton from './ConfirmModeButton'; 
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

//tests confirm mode button renders with correct text and hover text

describe("ConfirmModeButton", () => {
    test('button renders and link renders',() => {
        render(<ConfirmModeButton/>, {wrapper: BrowserRouter})
        expect(screen.getByLabelText("confirmmodeLabel").textContent).toEqual("Confirm New Mode")
        expect(screen.getByLabelText("modehideLabel").textContent).toEqual("Click here after selecting your mode.")
    })
})



