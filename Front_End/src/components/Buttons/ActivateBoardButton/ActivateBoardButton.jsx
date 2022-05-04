import "./ActivateBoardButton.css";




function ActivateBoardButton({ onClick1, onClick2 }) {

  return (
    <>
    <div className="ActivateContainer">
    <div className="ActivateBoardButton" role = "button" onClick = {onClick1}>
        <div className="Text_Style" aria-label= "textLabelactivate">
        <span>Activate Board</span>
        </div>
    </div>
    <div className="hide" aria-label= "textLabelinsert">
        Click when you're happy with your settings.
    </div>
    <div className="DeActivateBoardButton" role = "button" onClick = {onClick2}>
        <div className="Text_Style" aria-label= "textLabeldeactivate">
        <span>DeActivate Board</span>
        </div>
    </div>
    </div>
            

    </>
  );
}

export default ActivateBoardButton;