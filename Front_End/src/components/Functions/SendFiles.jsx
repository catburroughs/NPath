function SendFiles(newfile){

    return fetch("http://192.168.148.150:5000/upload", {
        method: "POST",
        headers: new Headers({'content-type': 'application/json'}),
        body:JSON.stringify({soundfile:newfile})
    })
        .then((response) => response.json())
        .catch((error) => console.log(error));
    }
    
    
    export default SendFiles;