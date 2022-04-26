import { render, screen } from '@testing-library/react';
import GetMode from './GetMode';


describe("GetMode function", () => {
    test('mode==1 should return "NPath Mode"', () => {
render(<GetMode mode={1} />)
expect(screen.getByText((text) => text.match('NPath Mode'))).toBeInTheDocument()
;
    });
})
