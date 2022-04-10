
import { useState, useEffect } from "react";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import GetTouchpads from "../components/Functions/GetTouchpads";

function AssignTouchpads() {
  const [touchpads, setTouchpads] = useState([]);

  // Modify the current state by setting the new data to
  // the response from the backend
  useEffect(() => {
    fetch("http://localhost:5000/frontend", {
      methods: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setTouchpads(response))
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

    <GetTouchpads
    touchpads = {touchpads}
    />

  </>
  );
}

export default AssignTouchpads;
