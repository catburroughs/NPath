import { useState, useEffect } from "react";




function GetTouchpads() {
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

  
    return(
        <ol>
          {touchpads.map(touchpad => (
            
            <li key={touchpad}><p>{touchpad}</p></li>
            
          ))}
        </ol>
      );
            
    
}

export default GetTouchpads;