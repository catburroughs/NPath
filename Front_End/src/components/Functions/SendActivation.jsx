

function SendActivation(boardStatus){
    
    return fetch("http://192.168.1.84:5000/setactivation", {
        method: "POST",
        headers: new Headers({'content-type': 'application/json'}),
        body:JSON.stringify({activation:boardStatus})
    })
        .then((response) => response.json())
        .catch((error) => console.log(error));
    }
    
    
    export default SendActivation;