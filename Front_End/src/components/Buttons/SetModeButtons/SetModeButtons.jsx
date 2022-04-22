import "./SetModeButtons.css";
import { Link } from 'react-router-dom';



function SetModeButtons() {




  

  return (
    <>
      <div className="NPath_Mode" >
        <div id="Text_Style">
          <span>NPath Mode</span>
        </div>
      </div>
      <div className="hide" >
          NPath Mode has a crafted soundscape.
      </div>
      
      <div className="Nature_Mode"  >
      <div id="Text_Style">
          <span>Nature Mode</span> 
          </div>
      </div>
     
      <div className="hide" >
          Nature Mode features sounds of the natural world.
      </div>

    

      <div className="Creator_Mode" >
        <div id="Text_Style">
          Creator Mode
        </div>
      </div>
      

      <div className="hide" >
          Click Uploader to Upload Sounds.
      </div>


      <Link to = '/UploadSounds'>
      <div className="Upload_Button">
      <div id="Upload_Style">
          UPLOADER
          </div>
          </div>
        </Link>
      




    </>
  );
}

export default SetModeButtons;