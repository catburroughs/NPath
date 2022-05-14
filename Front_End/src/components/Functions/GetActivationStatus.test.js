import { render, screen } from '@testing-library/react';
import GetActivationStatus from './GetActivationStatus';


//test to confirm Get Activation Status is returning correctly

describe("GetActivationStatus function for on", () => {
    test('board is on should return on', () => {
render(<GetActivationStatus boardstatus={"on"} />)
expect(screen.getByText((text) => text.match("on"))).toBeInTheDocument()
;
    });
})

describe("GetActivationStatus function for off", () => {
    test('board is off should return off', () => {
render(<GetActivationStatus boardstatus={"off"} />)
expect(screen.getByText((text) => text.match("off"))).toBeInTheDocument()
;
    });
})

