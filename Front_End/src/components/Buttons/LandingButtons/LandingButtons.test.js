import LandingButtons from "./LandingButtons";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe("LandingButtons", () => {
    test('button renders and link renders',() => {
        render(<LandingButtons/>, {wrapper: BrowserRouter})
        let link = screen.getAllByRole('link')[0]
        expect(link).toHaveAttribute('href',"/AboutNPath")
        let link2 = screen.getAllByRole('link')[1]
        expect(link2).toHaveAttribute('href','/Volume')
        let link3 = screen.getAllByRole('link')[2]
        expect(link3).toHaveAttribute('href','/Mode')
       
        
    });

    test('buttons have the correct text',() =>{
        render(<LandingButtons/>,{wrapper: BrowserRouter})
        expect(screen.getByLabelText("aboutLabel").textContent).toEqual("About NPath Board")
        expect(screen.getByLabelText("volumetextLabel").textContent).toEqual("Set Volume")
        expect(screen.getByLabelText("modetextLabel").textContent).toEqual("Choose Mode")
    })
})
