import { Link } from 'react-router-dom';
import "./SetTouchpadButton.css";


function GoBackButton() {

    return (
      <>


    <Link to = '/UploadSounds'>
    <div className="Back_to_Upload_Button" role = "button">
    <div className="Text_Style">
        Go Back to Upload Sounds Page
        </div>
        </div>
    </Link>
    </>
  );
    }
    export default GoBackButton;
