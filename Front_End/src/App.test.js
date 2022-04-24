// import { render, screen } from '@testing-library/react';
import App from './App';
// import React from 'react';
import GetMode from './components/Functions/GetMode';

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });

describe("GetMode function", () => {
  test('mode==1 should return "NPath Mode"', () => {
       expect(GetMode(1)).toBe("Npath Mode");
   });
})

describe("True test", () => {
test('true = true', () => {
    expect(true).toBe(true);
});
})