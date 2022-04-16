import "./SetModeButtons.css";
import { Link } from 'react-router-dom';



function SetModeButtons() {




  

  return (
    <>
    <div id = 'Choose_Mode' className='Choose_Mode'>
        <div id ="Text_Style">
        <span>Choose a Mode</span>

        </div>
    </div>

       
      <div id="NPath_Mode" >
        <div id="Text_Style">
          <span>NPath Mode</span>
        </div>
      </div>
      
      
      <div id="Nature_Mode"  >
      <div id="Text_Style">
          <span>Nature Mode</span> 
          </div>
      </div>
     


      <Link to = '/UploadSounds'>
      <div id="Creator_Mode" >
        <div id="Text_Style">
          <span>Creator Mode</span>
        </div>
      </div>
      </Link>




    </>
  );
}

export default SetModeButtons;