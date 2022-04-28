import BackgroundImage from "./BackgroundImage";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe("background image renders from correct source", () => {
    test('button renders',() => {
        render(<BackgroundImage/>, {wrapper: BrowserRouter})
        const backgroundImage = document.querySelector("img");
        expect(backgroundImage.src).toContain("labyrinthbackground")
          
    });
})