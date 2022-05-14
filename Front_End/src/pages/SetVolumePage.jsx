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

//receives current volume from Flask API
//onclick of confirm new volume sends the new volume level to Flask API
//displays a success banner on confirmation
//change IP address to reflect user's configuration or use localhost if running without hardware

function SetVolumePage() {
  let location = useLocation();
  const [currentvolume, setCurrentVolume] = useState(0.65);
  const [newvolume, setNewVolume] = useState(0);
  const [alert, setAlert] = useState(false);

  useEffect(() => { 
  fetch("http://localhost:5000/getvolume", {
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

