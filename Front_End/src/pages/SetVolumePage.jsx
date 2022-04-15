
import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";
import SetVolumeButtons from "../components/Buttons/SetVolumeButtons/SetVolumeButtons";
import SendVolume from "../components/Functions/SendVolume";
import VolSlider from "../components/Slider/VolSlider";
import GetVolumeFromFlask from "../components/Functions/GetVolumeFromFlask";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import ShowVolume from "../components/Functions/ShowVolume";


function SetVolumePage() {
  let location = useLocation();
  const [currentvolume, setCurrentVolume] = useState(0.65);
  const [newvolume, setNewVolume] = useState(0);
  useEffect(() => { 
    // do stuff
  fetch("http://localhost:5000/getvolume", {
    methods: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => setCurrentVolume(response))
    .catch((error) => console.log(error));
    
  

 
}, [location]);
  function handleClick(e) {
    {e.preventDefault();
      setCurrentVolume((newvolume));
      SendVolume(newvolume);
       
    }

  
  }

  return (
    <>
    <BackgroundImage />
    <div id = "Headline" className = "Headline">
    <div id = "Text_Style">
    Slide Toggle to Change Volume 
    </div>
    </div>
    <div id = "VolumeInput" className = "VolumeInput">
    <div id = "Text_Style">
    <ShowVolume
    volume = {currentvolume}
    />
    </div>
    </div>
    
   
    <SetVolumeButtons onClick = {handleClick} />
    
    <VolSlider newvolume={newvolume} setNewVolume={setNewVolume} setCurrentVolume={setCurrentVolume} currentvolume = {currentvolume}
 />
 


  </>
  );
}

export default SetVolumePage;

