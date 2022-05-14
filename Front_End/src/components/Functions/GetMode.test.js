import { render, screen } from '@testing-library/react';
import GetMode from './GetMode';

//test to confirm that the mode numerical value results in the correct text value

describe("GetMode function 1", () => {
    test('mode==1 should return "NPath Mode"', () => {
render(<GetMode mode={1} />)
expect(screen.getByText((text) => text.match('NPath Mode'))).toBeInTheDocument()
;
    });
})

describe("GetMode function 2", () => {
    test('mode==2 should return "Nature Mode"', () => {
render(<GetMode mode={2} />)
expect(screen.getByText((text) => text.match('Nature Mode'))).toBeInTheDocument()
;
    });
})

describe("GetMode function 3", () => {
    test('mode==3 should return "Creator Mode"', () => {
render(<GetMode mode={3} />)
expect(screen.getByText((text) => text.match('Creator Mode'))).toBeInTheDocument()
;
    });
})