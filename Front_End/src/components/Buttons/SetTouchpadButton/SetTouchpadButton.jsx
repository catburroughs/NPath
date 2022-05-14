import "./SetTouchpadButton.css";

//creates Set Touchpad Button with onclick funtionality that will send the user's touchpad assignment
//to the Back End via the Flask API

function SetTouchpadButton({ onClick }) {

  return (
    <>
    
    <div className='SetTouchpadButton' role = 'button' onClick = {onClick}>
        <div className='Text_Style' aria-label= "confirmMode">
            <span>Confirm Touchpad Assignments</span>
        </div>
    </div>
  
         
    </>
  );
}

export default SetTouchpadButton;