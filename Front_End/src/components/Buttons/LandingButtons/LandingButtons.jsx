import "./LandingButtons.css";
import { Link } from 'react-router-dom';


function LandingButtons() {
  return (
    <>
        <Link to = '/ActivateBoard'>
      <div id="Activate_Board_Button" className="Activate_Board_Button">
        <div id="Text_Style">
          <span>Activate NPath Board</span>
        </div>
      </div>
      </Link>

      <Link to = '/Volume'>
      <div id="Set_Volume_Button" className="Set_Volume_Button">
      <div id="Text_Style">
          <span>Set Volume</span> 
          </div>
      </div>
      </Link>

      <Link to = '/SetMode'>
      <div id="Choose_Mode_Button" className="Choose_Mode_Button">
        <div id="Text_Style">
          <span>Choose Mode</span>
        </div>
      </div>
      </Link>
    </>
  );
}

export default LandingButtons;
