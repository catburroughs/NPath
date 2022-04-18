function GetTouchpads({touchpads}) {

   
    return(
        <ol>
          {touchpads.map(touchpad => (
            
            <li key={touchpad}><p>{touchpad}</p></li>
            
          ))}
        </ol>
      );
            
    
}

export default GetTouchpads;