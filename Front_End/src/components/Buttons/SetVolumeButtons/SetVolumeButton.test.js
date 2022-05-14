import SetVolumeButtons from "./SetVolumeButtons";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe("Renders Set Volume Button and check text", () => {
    test('button renders',() => {
        render(<SetVolumeButtons/>, {wrapper: BrowserRouter})
        expect(screen.getByRole("button").textContent).toEqual("Set New Volume")
          
    });
})