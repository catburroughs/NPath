import { render, screen } from '@testing-library/react';
import ShowVolume from './ShowVolume';




describe("ShowVolume function", () => {
    test('volume is 6.5 should return 6.5', () => {
render(<ShowVolume volume={6.5} />)
expect(screen.getByText((text) => text.match(6.5))).toBeInTheDocument()
;
    });
})
