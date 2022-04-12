import { Slider } from "@material-ui/core";
import "./VolSlider.css";


function valuetext(event, value) {
  console.log(value);
   
  }

function VolSlider({ newvolume, setNewVolume }
  ){
return(
 <div id="volcontainer" className = "volcontainer">
<Slider
className="slider"
aria-label="Always visible"
value = {newvolume}
defaultValue={.65}
onChange={(event, value) => setNewVolume(value)}
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