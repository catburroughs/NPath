

function SendVolume(newvolume){

return fetch("http://localhost:5000/addvolume", {
    method: "POST",
    headers: new Headers({'content-type': 'application/json'}),
    body:JSON.stringify({volume:newvolume})
})
    .then((response) => response.json())
    //.then((response) => setCurrentVolume(response))
    .catch((error) => console.log(error));
}


export default SendVolume;