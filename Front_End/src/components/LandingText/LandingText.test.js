import LandingText from './LandingText'; 
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

//test to confirm Landing Text renders correctly

describe("LandingText", () => {
    test('button renders and link renders',() => {
        render(<LandingText/>, {wrapper: BrowserRouter})
        expect(screen.getByLabelText("landingText").textContent).toEqual("Find your NPath")
    })
})