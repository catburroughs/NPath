import { Slider } from "@material-ui/core";



function valuetext(value) {
    return `${value}°C`;
  }

function VolSlider(){
return(
<Slider
  aria-label="Always visible"
  defaultValue={.65}
  volume={valuetext}
  step={.05}
  marks
  min={.10}
  max={1.00}
  valueLabelDisplay="on"
/>
);
}

export default VolSlider;