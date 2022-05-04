import TouchpadMap from "../components/TouchpadMap/TouchpadMap";
import SetTouchpad from "../components/Functions/Touchpads/SetTouchpad";
import { useState, useEffect } from "react";
import GoBackButton from "../components/Buttons/SetTouchpadButton/GoBackButton";
import "../Global.css";
import SetTouchpadButton from "../components/Buttons/SetTouchpadButton/SetTouchpadButton";
import Alert from '@mui/material/Alert';
import SendTouchpads from "../components/Functions/Touchpads/SendTouchpads";


function AssignTouchpads() {
  const [touchpads, setTouchpads] = useState([]);
  const [assignedtouchpad, setAssignedTouchpad] = useState({});
  const [alert, setAlert] = useState(false);
  

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

  function handleClick(e) {
    {e.preventDefault();
      console.log(assignedtouchpad);
      SendTouchpads(assignedtouchpad);
      setAlert(true);
       
    }
  }

  return (
    <>
    {alert ? <Alert  role="alert" severity = "success">Touchpads Set</Alert>: <></>}
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
