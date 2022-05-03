import TouchpadMap from "../components/TouchpadMap/TouchpadMap";
import SetTouchpad from "../components/Functions/Touchpads/SetTouchpad";
import { useState, useEffect } from "react";
import GoBackButton from "../components/Buttons/SetTouchpadButton/GoBackButton";
import "../Global.css";

function AssignTouchpads() {
  const [touchpads, setTouchpads] = useState([]);

  useEffect(() => {
    fetch("http://192.168.148.150:5000/getsoundfiles", {
      methods: "GET",
      headers: {
        "Access-Control-Allow-Origin": "*",
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
<div className = "TouchpadBox">
    <SetTouchpad touchpads = {touchpads} />
    </div>
    <GoBackButton />
    

  </>
  );
}

export default AssignTouchpads;
