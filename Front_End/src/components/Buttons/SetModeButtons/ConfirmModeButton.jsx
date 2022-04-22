import "./ConfirmModeButton.css";



function ConfirmModeButton({ onClick }) {

  return (
    <>
    
          <div className='ConfirmModeButton' role = 'button' onClick = {onClick}>
              <div id='Text_Style'>
                  <span>Confirm New Mode</span>
              </div>
          </div>
          <div className = 'hide'>
            Click here after selecting your mode.
          </div>
    </>
  );
}

export default ConfirmModeButton;