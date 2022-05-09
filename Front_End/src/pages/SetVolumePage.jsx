import "../Global.css";
import { useState, useEffect } from "react";
import Alert from '@mui/material/Alert';
import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";
import SetVolumeButtons from "../components/Buttons/SetVolumeButtons/SetVolumeButtons";
import SendVolume from "../components/Functions/SendVolume";
import VolumeSlider from "../components/Slider/VolumeSlider";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import ShowVolume from "../components/Functions/ShowVolume";


function SetVolumePage() {
  let location = useLocation();
  const [currentvolume, setCurrentVolume] = useState(0.65);
  const [newvolume, setNewVolume] = useState(0);
  const [alert, setAlert] = useState(false);

  useEffect(() => { 
  fetch("http://192.168.148.150:5000/getvolume", {
    methods: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
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
      setAlert(true);
      
      
       
    }

  
  }

  return (
    <>
    
    <BackgroundImage />
   
   
    <div className="AlertContainer">
    {alert ? <Alert role="alert" severity = "success">New Volume Set</Alert>: <></>}
    </div>
  
   
    <div className = "Headline">
    <div className = "Text_Style">
    Slide Toggle to Change Volume 
    </div>
    </div>
   
    <VolumeSlider newvolume={newvolume} setNewVolume={setNewVolume} setCurrentVolume={setCurrentVolume} currentvolume = {currentvolume}/>
    <div className = "VolumeInput">
    <div className = "Text_Style">
    <ShowVolume
    volume = {currentvolume}
    />
    </div>
    </div>
    <SetVolumeButtons onClick = {handleClick} />
    
   

  </>
  );
}

export default SetVolumePage;

