import GoBackButton from "./GoBackButton";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe("GoBackButton", () => {
    test('button renders and link renders',() => {
        render(<GoBackButton/>, {wrapper: BrowserRouter})
        let link = screen.getByRole('link')
        expect(link).toHaveAttribute('href',"/UploadSounds") 
        expect((link).textContent).toEqual("Go Back to Upload Sounds Page")   
    });

})
