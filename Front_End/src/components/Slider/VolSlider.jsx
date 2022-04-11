import { Slider } from "@material-ui/core";
import "./VolSlider.css";


function valuetext(value) {
    return `${value}°C`;
  }

function VolSlider(){
return(
 <div id="volcontainer" className = "volcontainer">
<Slider
className="slider"
aria-label="Always visible"
defaultValue={.65}
volume={valuetext}
step={.05}
marks
min={.10}
max={1.00}
valueLabelDisplay="on"
/>
</div>
);
}

export default VolSlider;