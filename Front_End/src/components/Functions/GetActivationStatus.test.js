import { render, screen } from '@testing-library/react';
import GetActivationStatus from './GetActivationStatus';




describe("GetActivationStatus function", () => {
    test('board is on should return on', () => {
render(<GetActivationStatus boardstatus={"on"} />)
expect(screen.getByText((text) => text.match("on"))).toBeInTheDocument()
;
    });
})
