import { useState, useEffect } from "react";
import TouchpadMap from "../components/TouchpadMap/TouchpadMap";
import GetTouchpads from "../components/Functions/Touchpads/GetTouchpads";
import SetTouchpad from "../components/Functions/Touchpads/SetTouchpad";

function AssignTouchpads() {


  


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

   
    
    <SetTouchpad />
    

  </>
  );
}

export default AssignTouchpads;
