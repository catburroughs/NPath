function SendMode(newmode){

    return fetch("http://192.168.148.150:5000/addmode", {
        method: "POST",
        headers: new Headers({'content-type': 'application/json'}),
        body:JSON.stringify({mode:newmode})
    })
        .then((response) => response.json())
        .catch((error) => console.log(error));
    }
    
    
    export default SendMode;