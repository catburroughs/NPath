import TouchpadMap from "../components/TouchpadMap/TouchpadMap";
import SetTouchpad from "../components/Functions/Touchpads/SetTouchpad";
import { useState, useEffect } from "react";
import GoBackButton from "../components/Buttons/SetTouchpadButton/GoBackButton";
import "../Global.css";
import SetTouchpadButton from "../components/Buttons/SetTouchpadButton/SetTouchpadButton";
import Alert from '@mui/material/Alert';
import SendTouchpads from "../components/Functions/Touchpads/SendTouchpads";

//receives a list of sound file names from Flask API 
//sends list to Assign Touchpads page to be displayed as option on MUI select boxes
//change IP address to reflect user's configuration or use localhost if running without hardware

function AssignTouchpads() {
  const [touchpads, setTouchpads] = useState([]);
  const [assignedtouchpad, setAssignedTouchpad] = useState({});
  const [alert, setAlert] = useState(false);
  

  useEffect(() => {
    fetch("http://localhost:5000/getsoundfiles", {
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

  function handleClick(e) {
    {e.preventDefault();
      console.log(assignedtouchpad);
      SendTouchpads(assignedtouchpad);
      setAlert(true);
       
    }
  }

  return (
    <>
    <div className="AlertContainer">
    {alert ? <Alert  role="alert" severity = "success">Touchpads Set</Alert>: <></>}
    </div>
    <TouchpadMap />
    <div className = "TouchpadBox">
    <SetTouchpad touchpads = {touchpads} assignedtouchpad = {assignedtouchpad} setAssignedTouchpad = {setAssignedTouchpad} />
    </div>
    <GoBackButton />
    <SetTouchpadButton onClick={handleClick} />
    

  </>
  );
}

export default AssignTouchpads;
