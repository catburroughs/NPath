import Taskbar from "./Taskbar";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe("Taskbar", () => {
    test('taskbar text renders and link renders',() => {
        render(<Taskbar/>, {wrapper: BrowserRouter})
        let link = screen.getAllByRole('link')[0]
        expect(link).toHaveAttribute('href',"/")
        expect((link).textContent).toEqual("Home")
        let link2 = screen.getAllByRole('link')[1]
        expect(link2).toHaveAttribute('href','/ActivateBoard')
        expect((link2).textContent).toEqual("Activate NPath")
        let link3 = screen.getAllByRole('link')[2]
        expect(link3).toHaveAttribute('href','/Volume')
        expect((link3).textContent).toEqual("Volume")
        let link4 = screen.getAllByRole('link')[3]
        expect(link4).toHaveAttribute('href','/Mode')
        expect((link4).textContent).toEqual("Mode")
       
        
    });

    
})
