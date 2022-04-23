

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