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

function ActivateBoard() {
  let location = useLocation();
  const [currentboardstatus, setCurrentBoardStatus] = useState('off')
  useEffect(() => { 
    fetch("http://localhost:5000/getactivation", {
    methods: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((response) => setCurrentBoardStatus(response))
    .catch((error) => console.log(error));
    
}, [location]); 
function handleClick() {
  const boardStatus = "on"
  {
    SendActivation(boardStatus);
    console.log(boardStatus);
  }
}
  return (
    <>
    <BackgroundImage />
    <GetActivationStatus boardstatus={currentboardstatus} />
    <ActivateBoardButton onClick={handleClick} />
    
    
    </>
  );



}
export default ActivateBoard;