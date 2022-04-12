
import { useState, useEffect } from "react";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import SetVolumeButtons from "../components/Buttons/SetVolumeButtons/SetVolumeButtons";
import SendVolume from "../components/Functions/SendVolume";
import ShowVolume from "../components/Functions/ShowVolume";
import VolSlider from "../components/Slider/VolSlider";

function GetVolume() {
  const [currentvolume, setCurrentVolume] = useState(0);
  const [newvolume, setNewVolume] = useState(0);


  // Modify the current state by setting the new data to
  // the response from the backend
  useEffect(() => {
    fetch("http://localhost:5000/getvolume", {
      methods: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setCurrentVolume(response))
      .catch((error) => console.log(error));
  }, []);



  return (
    <>
    Test Volume {newvolume}
    <div id = "Headline" className = "Headline">
    <div id = "Text_Style">
    Slide Toggle to Change Volume 
    </div>
    </div>
    
    <VolSlider newvolume={newvolume} setNewVolume={setNewVolume}
 />
    <SetVolumeButtons onClick = { (e) =>{SendVolume(newvolume)} }/>
   

    <BackgroundImage />
    

<div id = "VolumeInput" className = "VolumeInput">
  <div id = "Text_Style">
    <ShowVolume
    volume = {currentvolume}
    />
    </div>
</div>
  </>
  );
}

export default GetVolume;


//onClick = {this.SetVolume}
