import "./ConfirmModeButton.css";



function ConfirmModeButton({ onClick }) {

  return (
    <>
    
          <div id='ConfirmModeButton' role = 'button' onClick = {onClick}>
              <div id='Text_Style'>
                  <span>Confirm Mode</span>
              </div>
          </div>
    </>
  );
}

export default ConfirmModeButton;