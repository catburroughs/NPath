import { Link } from 'react-router-dom';
import "./SetTouchpadButton.css";

//creates a button on the Assign Touchpad page allowing the user to return to the Upload Sounds page

function GoBackButton() {

    return (
      <>


    <Link to = '/UploadSounds'>
    <div className="Back_to_Upload_Button" role = "button">
    <div className="Text_Style">
        Back to Upload Sounds
        </div>
        </div>
    </Link>
    </>
  );
    }
    export default GoBackButton;
