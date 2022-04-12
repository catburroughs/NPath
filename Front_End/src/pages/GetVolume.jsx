
import { useState, useEffect } from "react";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import SetVolumeButtons from "../components/Buttons/SetVolumeButtons/SetVolumeButtons";
import SetVolume from "../components/Functions/SetVolume";
import ShowVolume from "../components/Functions/ShowVolume";
import VolSlider from "../components/Slider/VolSlider";

function GetVolume() {
  const [volume, setvol] = useState([]);


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
      .then((response) => setvol(response))
      .catch((error) => console.log(error));
  }, []);



  return (
    <>
    <div id = "Headline" className = "Headline">
    <div id = "Text_Style">
    Slide Toggle to Change Volume
    </div>
    </div>
    
    <VolSlider />
    <SetVolumeButtons />
   

    <BackgroundImage />
    

<div id = "VolumeInput" className = "VolumeInput">
  <div id = "Text_Style">
    <ShowVolume
    volume = {volume}
    />
    </div>
</div>
  </>
  );
}

export default GetVolume;


//onClick = {this.SetVolume}
