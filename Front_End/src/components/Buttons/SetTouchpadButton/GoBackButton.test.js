import GoBackButton from "./GoBackButton";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

//tests that the Back to Upload Sounds button on Assign Touchpad page renders with 
//correct text and link

describe("GoBackButton", () => {
    test('button renders and link renders',() => {
        render(<GoBackButton/>, {wrapper: BrowserRouter})
        let link = screen.getByRole('link')
        expect(link).toHaveAttribute('href',"/UploadSounds") 
        expect((link).textContent).toEqual("Back to Upload Sounds")   
    });

})
