export default class SetVolume{
    // Insert an article
    static SetVolume(volume){
        return fetch(`http://localhost:5000/addvolume`,{
            'method':'POST',
             headers : {
            'Content-Type':'application/json'
      },
      body:JSON.stringify(volume)
    })
    .then(response => response.json())
    .catch(error => console.log(error))
    }

}