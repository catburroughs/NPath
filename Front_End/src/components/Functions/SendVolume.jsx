//function to send new volume assignment to Flask API
//change IP address to reflect user's configuration or use localhost if running without hardware

function SendVolume(newvolume){

return fetch("http://localhost:5000/addvolume", {
    method: "POST",
    headers: new Headers({'content-type': 'application/json'}),
    body:JSON.stringify({volume:newvolume})
})
    .then((response) => response.json())
    .catch((error) => console.log(error));
    
}


export default SendVolume;