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


function SetModePage() {
  let location = useLocation();
  const [currentmode, setCurrentMode] = useState(1)
  const [alert, setAlert] = useState(false);


  useEffect(() => { 
    // do stuff
  fetch("http://192.168.1.84:5000/getmode", {
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
    {alert ? <Alert  role="alert" severity = "success">New Mode Set</Alert>: <></>}

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