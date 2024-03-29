import "../Global.css";
import Alert from '@mui/material/Alert';
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import SetModeButtons from "../components/Buttons/SetModeButtons/SetModeButtons";
import SendMode from "../components/Functions/SendMode";
import { useState, useEffect } from "react";
import GetMode from "../components/Functions/GetMode";
import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";
import SetModeRadio from "../components/Buttons/SetModeButtons/SetModeRadio";
import ConfirmModeButton from  "../components/Buttons/SetModeButtons/ConfirmModeButton";

//receives current set mode from Flask API
//onclick of confirm mode sends user's new mode selection to Flask API
//displays a success banner on confirmation
//change IP address to reflect user's configuration or use localhost if running without hardware

function SetModePage() {
  let location = useLocation();
  const [currentmode, setCurrentMode] = useState(1)
  const [alert, setAlert] = useState(false);


  useEffect(() => { 
  fetch("http://localhost:5000/getmode", {
    methods: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => setCurrentMode(response))
    .catch((error) => console.log(error));
    
}, [location]);
function handleClick(e) {
  {e.preventDefault();
    SendMode(currentmode)
    setAlert(true);
  }
}

  return (
    <>
    <BackgroundImage />
    <div className="AlertContainer">
    {alert ? <Alert  role="alert" severity = "success">New Mode Set</Alert>: <></>}
    </div>
    <div className = "ModeInput">
    <div className = "Text_Style">
    <GetMode
    mode = {currentmode}
    />
    </div>
    </div>
    <div className="RadioContainer">
    <SetModeRadio currentmode = {currentmode} setCurrentMode={setCurrentMode}/>
    </div>
    <SetModeButtons />
    <ConfirmModeButton onClick = {handleClick}/>
    </>
  );


}

export default SetModePage;