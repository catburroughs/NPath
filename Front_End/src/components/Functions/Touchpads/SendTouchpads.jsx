

//function to send touchpad assignment to uploaded sound files to Flask API
//change IP address to reflect user's configuration or use localhost if running without hardware


function SendTouchpads(assignedtouchpad){
  

  return fetch("http://localhost:5000/gettouchpads", {
    method: "POST",
    headers: new Headers({'content-type': 'application/json'}),
    body:JSON.stringify({touchpads:assignedtouchpad})
})
    .then((response) => response.json())
    .catch((error) => console.log(error));
}


  
   

export default SendTouchpads;