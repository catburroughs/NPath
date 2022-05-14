
//function displays the user's new volume on the Volume Page and on refreshing or when coming back to the page
//shows the current set volume 

function ShowVolume({volume}) {
    
    return (
        
        <div className="m-2">
            Volume =  {volume}
      
          </div>
            
    );
}

export default ShowVolume;