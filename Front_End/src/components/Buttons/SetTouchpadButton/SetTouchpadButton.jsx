import "./SetTouchpadButton.css";



function SetTouchpadButton({ onClick }) {

  return (
    <>
    
    <div className='SetTouchpadButton' role = 'button' onClick = {onClick}>
        <div className='Text_Style'>
            <span>Confirm Touchpad Assignments</span>
        </div>
    </div>
    <div className = 'hide'>
      Click here after selecting your touchpads.
    </div>
         
    </>
  );
}

export default SetTouchpadButton;