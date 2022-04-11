
import { useState, useEffect } from "react";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
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
    <VolSlider />
    <BackgroundImage />
    
    <div className="App container m-4">
    <div className="row">
    <div className="text-center">
    <h1>NPath Project.</h1>
    </div>
  </div>
  </div>

    <ShowVolume
    volume = {volume}
    />

  </>
  );
}

export default GetVolume;
