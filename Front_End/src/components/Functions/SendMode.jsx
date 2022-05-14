//function to send new mode assignment to Flask API
//change IP address to reflect user's configuration or use localhost if running without hardware

function SendMode(newmode){

    return fetch("http://localhost:5000/addmode", {
        method: "POST",
        headers: new Headers({'content-type': 'application/json'}),
        body:JSON.stringify({mode:newmode})
    })
        .then((response) => response.json())
        .catch((error) => console.log(error));
    }
    
    
    export default SendMode;