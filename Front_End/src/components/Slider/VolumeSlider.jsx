import { Slider } from "@material-ui/core";
import "./VolumeSlider.css";



function VolumeSlider({ newvolume, setNewVolume, currentvolume, setCurrentVolume}
  ){



return(
 <div id="volcontainer" className = "volcontainer">
<Slider
className="slider"
valueLabelDisplay="auto"
value = {currentvolume}
defaultValue = {currentvolume}
onChange={(event, value) => {setNewVolume(value); setCurrentVolume(newvolume)}}
step={.05}
marks
min={.10}
max={1.00}

/>
</div>
);
}

export default VolumeSlider;