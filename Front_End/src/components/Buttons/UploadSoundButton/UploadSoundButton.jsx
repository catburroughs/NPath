import "./UploadSoundButton.css";
import { Link } from 'react-router-dom';

//creates button to take users to Assign Touchpads page from the Upload Sounds page

function UploadSoundButton() {

  return (
    <>

      <Link to = '/AssignTouchpads'>
      <div className="Touchpad_Button" role = "button">
      <div className="Text_Style">
          Assign Touchpads to Your Sounds
          </div>
          </div>
        </Link>
      
    </>
  );
}

export default UploadSoundButton;