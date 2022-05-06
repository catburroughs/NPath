import "./LandingButtons.css";
import { Link } from 'react-router-dom';


function LandingButtons() {
  return (
    <>
        <Link to = '/AboutNPath'>
      <div className="About_NPath" role = "button">
        <div className="Text_Style" aria-label= "aboutLabel">
          About the NPath Board
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
