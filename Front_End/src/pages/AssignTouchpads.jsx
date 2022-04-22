import TouchpadMap from "../components/TouchpadMap/TouchpadMap";
import SetTouchpad from "../components/Functions/Touchpads/SetTouchpad";
import { useState, useEffect } from "react";

function AssignTouchpads() {
  const [touchpads, setTouchpads] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/getsoundfiles", {
      methods: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setTouchpads(response))
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

   
    
    <SetTouchpad touchpads = {touchpads} />
   
    

  </>
  );
}

export default AssignTouchpads;
