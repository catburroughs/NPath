import ActivateBoardButton from "./ActivateBoardButton";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe("Renders Activate Board Buttons and check text", () => {
    test('button renders',() => {
        render(<ActivateBoardButton/>, {wrapper: BrowserRouter})
        expect(screen.getByLabelText("textLabelactivate").textContent).toEqual("Activate Board")
        expect(screen.getByLabelText("textLabelinsert").textContent).toEqual("Click when you're happy with your settings.")
        expect(screen.getByLabelText("textLabeldeactivate").textContent).toEqual("DeActivate Board")
          
    });
})
