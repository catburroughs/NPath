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
          NPath Mode has a crafted soundscape
      </div>
      
      <div className="Nature_Mode"  >
      <div id="Text_Style">
          <span>Nature Mode</span> 
          </div>
      </div>
     
      <div className="hide" >
          Nature Mode features sounds of the natural world
      </div>

    

      <div className="Creator_Mode" >
        <Link to = '/UploadSounds'>
        <div id="Text_Style">
          Creator Mode
        </div>
        </Link>
      </div>
      

      <div className="hide" >
          Click the Creator Mode Area to Upload Sounds
      </div>




    </>
  );
}

export default SetModeButtons;