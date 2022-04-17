function SendFiles(newfile){

    return fetch("http://localhost:5000/upload", {
        method: "POST",
        headers: new Headers({'content-type': 'application/json'}),
        body:JSON.stringify({soundfile:newfile})
    })
        .then((response) => response.json())
        //.then((response) => setCurrentVolume(response))
        .catch((error) => console.log(error));
    }
    
    
    export default SendFiles;