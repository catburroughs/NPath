import UploadSoundButton from "./UploadSoundButton";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

//test to confirm correct text and link for Assign Touchpads button on Upload Sounds page

describe("UploadSoundButton", () => {
    test('button renders and link renders',() => {
        render(<UploadSoundButton/>, {wrapper: BrowserRouter})
        let link = screen.getByRole('link')
        expect(link).toHaveAttribute('href',"/AssignTouchpads")
        expect((link).textContent).toEqual("Assign Touchpads to Your Sounds")   
    });

})