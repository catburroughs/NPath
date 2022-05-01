function SendMode(newmode){

    return fetch("http://192.168.1.84:5000/addmode", {
        method: "POST",
        headers: new Headers({'content-type': 'application/json'}),
        body:JSON.stringify({mode:newmode})
    })
        .then((response) => response.json())
        //.then((response) => setCurrentVolume(response))
        .catch((error) => console.log(error));
    }
    
    
    export default SendMode;