import "./UploadSoundButton.css";
import { Link } from 'react-router-dom';



function UploadSoundButton() {




  

  return (
    <>

      <Link to = '/AssignTouchpads'>
      <div className="Touchpad_Button">
      <div id="Text_Style">
          Assign Touchpads to Your Sounds
          </div>
          </div>
        </Link>
      




    </>
  );
}

export default UploadSoundButton;