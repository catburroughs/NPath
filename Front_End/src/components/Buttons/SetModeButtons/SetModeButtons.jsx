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

        <Link to = '/ShowMode'>
      <div id="NPath_Mode" className="NPath_Mode">
        <div id="Text_Style">
          <span>NPath Mode</span>
        </div>
      </div>
      </Link>



      <Link to = '/ShowMode'>
      <div id="Nature_Mode" className="Nature_Mode">
      <div id="Text_Style">
          <span>Nature Mode</span> 
          </div>
      </div>
      </Link>


      <Link to = '/UploadSounds'>
      <div id="Creator_Mode" className="Creator_Mode">
        <div id="Text_Style">
          <span>Creator Mode</span>
        </div>
      </div>
      </Link>



      <Link to = '/AssignTouchpads'>
          <div id='Assign_Touchpads'>
              <div id='Text_Style'>
                  <span>Assign Touchpads</span>
              </div>
          </div>
      </Link>
    </>
  );
}

export default SetModeButtons;