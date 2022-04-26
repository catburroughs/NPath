import "./LandingButtons.css";
import { Link } from 'react-router-dom';


function LandingButtons() {
  return (
    <>
        <Link to = '/ActivateBoard'>
      <div className="Activate_Board_Button" role = "button">
        <div className="Text_Style" aria-label= "activatetextLabel">
          Activate NPath Board
        </div>
      </div>
      </Link>

      <Link to = '/Volume'>
      <div className="Set_Volume_Button" role = "button">
      <div className="Text_Style" aria-label= "volumetextLabel">
          Set Volume
          </div>
      </div>
      </Link>

      <Link to = '/Mode'>
      <div id="Choose_Mode_Button" className="Choose_Mode_Button">
        <div className="Text_Style" aria-label= "modetextLabel">
          Choose Mode
        </div>
      </div>
      </Link>
    </>
  );
}

export default LandingButtons;
