//function to send activation or deactivation command to Flask API
//change IP address to reflect user's configuration or use localhost if running without hardware

function SendActivation(boardStatus){
    
    return fetch("http://localhost:5000/setactivation", {
        method: "POST",
        headers: new Headers({'content-type': 'application/json'}),
        body:JSON.stringify({activation:boardStatus})
    })
        .then((response) => response.json())
        .catch((error) => console.log(error));
    }
    
    
    export default SendActivation;