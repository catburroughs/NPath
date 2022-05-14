import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import ActivateBoardButton from "../components/Buttons/ActivateBoardButton/ActivateBoardButton";
import SendActivation from "../components/Functions/SendActivation";
import {
  BrowserRouter as Router,
  Switch,
  useLocation
} from "react-router-dom";
import { useState, useEffect } from "react";
import GetActivationStatus from "../components/Functions/GetActivationStatus";

//receives activation status from Flask API
//updates current board status when triggered by user clicking activate or deactivate buttons
//automatically refreshes page to update new status
//change IP address to reflect user's configuration or use localhost if running without hardware

function ActivateBoard() {
  let location = useLocation();
  const [currentboardstatus, setCurrentBoardStatus] = useState('off')
  useEffect(() => { 
    fetch("http://localhost:5000/getactivation", {
    methods: "GET",
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => setCurrentBoardStatus(response))
    .catch((error) => console.log(error));
    
}, [location]); 

const refreshPage = ()=>{
  window.location.reload();
}

function handleClickON() {
  const boardStatus = "on"
  {
    SendActivation(boardStatus);
    console.log(boardStatus);
    refreshPage();
  }
}
function handleClickOFF() {
  const boardStatus = "off"
  {
    SendActivation(boardStatus);
    console.log(boardStatus);
    refreshPage();
  }
}
  return (
    <>
    <BackgroundImage />
    <div className = "StatusInput">
    <div className = "Text_Style">
    <GetActivationStatus boardstatus={currentboardstatus} />
    </div>
    </div>
    <ActivateBoardButton onClick1={handleClickON} onClick2={handleClickOFF} />
    
    
    </>
  );



}
export default ActivateBoard;