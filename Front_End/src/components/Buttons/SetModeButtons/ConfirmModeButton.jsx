import "./SetModeButtons.css";

//Creates Confirm Mode button on Mode Page with On Click functionality to send new mode choice to Back End

function ConfirmModeButton({ onClick }) {

  return (
    <>
    
          <div className='ConfirmModeButton' role = 'button' onClick = {onClick}>
              <div className='Text_Style' aria-label= "confirmmodeLabel">
                  <span>Confirm New Mode</span>
              </div>
          </div>
          <div className = 'hide' aria-label= "modehideLabel">
            Click here after selecting your mode.
          </div>
    </>
  );
}

export default ConfirmModeButton;