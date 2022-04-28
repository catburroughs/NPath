import SetModeButtons from "./SetModeButtons";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe("SetModeButtons", () => {
    test('button renders and link renders',() => {
        render(<SetModeButtons/>, {wrapper: BrowserRouter})
        let link = screen.getByRole('link')
        expect(link).toHaveAttribute('href',"/UploadSounds")    
    });

    test('buttons have the correct text',() =>{
        render(<SetModeButtons/>,{wrapper: BrowserRouter})
        expect(screen.getByLabelText("npathMode").textContent).toEqual("NPath Mode")
        expect(screen.getByLabelText("npathHide").textContent).toEqual("NPath Mode has a crafted soundscape.")
        expect(screen.getByLabelText("natureMode").textContent).toEqual("Nature Mode")
        expect(screen.getByLabelText("natureHide").textContent).toEqual("Nature Mode features sounds of the natural world.")
        expect(screen.getByLabelText("creatorMode").textContent).toEqual("Creator Mode")
        expect(screen.getByLabelText("creatorHide").textContent).toEqual("Click Uploader to Upload Sounds.")
        expect(screen.getByLabelText("uploadButton").textContent).toEqual("UPLOADER")
    })
})
