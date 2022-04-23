




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