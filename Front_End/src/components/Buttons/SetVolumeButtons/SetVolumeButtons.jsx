import "./SetVolumeButton.css";
import { Link } from 'react-router-dom';


function SetVolumeButtons({ onClick }) {

  return (
    <>
    
          <div id='SetVolumeButton' role = 'button' onClick = {onClick}>
              <div id='Text_Style'>
                  <span>Set New Volume</span>
              </div>
          </div>
    </>
  );
}

export default SetVolumeButtons;