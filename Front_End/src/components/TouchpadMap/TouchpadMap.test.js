import TouchpadMap from "./TouchpadMap";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

//test rendering of Touchpad Map is using correct image

describe("Renders Set Volume Button and check text", () => {
    test('button renders',() => {
        render(<TouchpadMap/>, {wrapper: BrowserRouter})
        const touchpadMap = document.querySelector("img");
        expect(touchpadMap.src).toContain("numberedtouchpads")
          
    });
})