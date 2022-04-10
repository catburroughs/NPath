
import { useState, useEffect } from "react";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import GetMode from "../components/Functions/GetMode";

function ShowMode() {
  const [mode, setMode] = useState([]);

  // Modify the current state by setting the new data to
  // the response from the backend
  useEffect(() => {
    fetch("http://localhost:5000/getmode", {
      methods: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setMode(response))
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

    <GetMode
    mode = {mode}
    />

  </>
  );
}

export default ShowMode;