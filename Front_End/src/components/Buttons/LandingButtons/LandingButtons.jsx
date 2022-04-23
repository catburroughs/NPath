import "./LandingButtons.css";
import { Link } from 'react-router-dom';


function LandingButtons() {
  return (
    <>
        <Link to = '/ActivateBoard'>
      <div className="Activate_Board_Button" role = "button">
        <div className="Text_Style">
          <span>Activate NPath Board</span>
        </div>
      </div>
      </Link>

      <Link to = '/Volume'>
      <div className="Set_Volume_Button" role = "button">
      <div className="Text_Style">
          <span>Set Volume</span> 
          </div>
      </div>
      </Link>

      <Link to = '/Mode'>
      <div id="Choose_Mode_Button" className="Choose_Mode_Button">
        <div className="Text_Style">
          <span>Choose Mode</span>
        </div>
      </div>
      </Link>
    </>
  );
}

export default LandingButtons;
