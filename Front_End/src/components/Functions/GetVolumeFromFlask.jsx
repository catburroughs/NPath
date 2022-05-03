
import { useState, useEffect } from "react";
import BackgroundImage from "../BackgroundImage/BackgroundImage";
import SendVolume from "./SendVolume";
import ShowVolume from "./ShowVolume";

function GetVolumeFromFlask() {
  const [currentvolume, setCurrentVolume] = useState(0.65);


  // Modify the current state by setting the new data to
  // the response from the backend

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
      
  }, []);


  return (
      <>
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

export default GetVolumeFromFlask;

