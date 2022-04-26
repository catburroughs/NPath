import AboutNpathButton from "./AboutNpathButton";
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

describe("AboutNpath Button", () => {
    test('button renders',() => {
        render(<AboutNpathButton/>, {wrapper: BrowserRouter})
        expect(screen.getByRole('link')).toHaveAttribute('href',"/ActivateBoard")
        expect(screen.getByText((text) => text.match('Activate NPath Board'))).toBeInTheDocument()
        
    });
})


