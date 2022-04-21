import { useState, useEffect } from "react";
import TouchpadMap from "../components/TouchpadMap/TouchpadMap";
import GetTouchpads from "../components/Functions/Touchpads/GetTouchpads";
import SetTouchpad from "../components/Functions/Touchpads/SetTouchpad";

function AssignTouchpads() {
  const [touchpads, setTouchpads] = useState([]);

  // Modify the current state by setting the new data to
  // the response from the backend
  useEffect(() => {
    fetch("http://localhost:5000/getsoundfiles", {
      methods: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setTouchpads(...touchpads, (response)))
      .catch((error) => console.log(error));
  },[]);

  


  return (
    <>
    <TouchpadMap />
    <div className="App container m-4">
    <div className="row">
    <div className="text-center">
    <h1>NPath Project.</h1>
    </div>
  </div>
  </div>

   
    <GetTouchpads touchpads = {touchpads} />
    <SetTouchpad touchpads = {touchpads} />
    

  </>
  );
}

export default AssignTouchpads;
