import "./TouchpadMap.css";
import labmap from "./numberedtouchpads.jpg";

//displays touchpad map on Touchpad Assignment page

function TouchpadMap() {
    return(
<>
<div id="Touchpad_Map" aria-label= "touchpadMap">
    
<img id = "labmap"  src={labmap}/>


</div>


</>
    )

}

export default TouchpadMap;