
import { useState, useEffect } from "react";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import GetVolume from "../components/Functions/GetVolume";

function SetVolume() {
  const [volume, setVolume] = useState([]);

  // Modify the current state by setting the new data to
  // the response from the backend
  useEffect(() => {
    fetch("http://localhost:5000/volume", {
      methods: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setVolume(response))
      .catch((error) => console.log(error));
  }, []);



  return (
    <>
    <BackgroundImage />
    <div className="App container m-4">
    <div className="row">
    <div className="text-center">
    <h1>NPath Project.</h1>
    </div>
  </div>
  </div>

    <GetVolume
    volume = {volume}
    />

  </>
  );
}

export default SetVolume;
