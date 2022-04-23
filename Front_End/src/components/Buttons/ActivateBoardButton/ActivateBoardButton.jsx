import "./ActivateBoardButton.css";




function ActivateBoardButton({ onClick }) {

  return (
    <>
   
            <div className="ActivateBoardButton" role = "button" onClick = {onClick}>
                <div className="Text_Style">
                <span>Activate Board</span>
                </div>
            </div>
            <div className="hide" >
                Click when you're happy with your settings.
            </div>

    </>
  );
}

export default ActivateBoardButton;