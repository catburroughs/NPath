function GetTouchpads({touchpads}) {

   
    return(
        <ol>
          {touchpads.map(touchpad => (
            <li key={touchpad}>{touchpad}</li>
          ))}
        </ol>
      );
            
    
}

export default GetTouchpads;