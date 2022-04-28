import "./SetModeButtons.css";
import { Link } from 'react-router-dom';



function SetModeButtons() {

  return (
    <>
   
      <div className="NPath_Mode">
        <div className="Text_Style" aria-label= "npathMode">
          <span>NPath Mode</span>
        </div>
      </div>
      <div className="hide" aria-label= "npathHide">
          NPath Mode has a crafted soundscape.
      </div>
      
      <div className="Nature_Mode">
      <div className="Text_Style" aria-label= "natureMode">
          <span>Nature Mode</span> 
          </div>
      </div>
     
      <div className="hide" aria-label= "natureHide">
          Nature Mode features sounds of the natural world.
      </div>

    

      <div className="Creator_Mode" >
        <div className="Text_Style" aria-label= "creatorMode">
          Creator Mode
        </div>
      </div>
      

      <div className="hide" aria-label= "creatorHide">
          Click Uploader to Upload Sounds.
      </div>


      <Link to = '/UploadSounds'>
      <div className="Upload_Button" role = "button">
      <div className="Upload_Style" aria-label= "uploadButton">
          UPLOADER
          </div>
          </div>
        </Link>
     
      




    </>
  );
}

export default SetModeButtons;