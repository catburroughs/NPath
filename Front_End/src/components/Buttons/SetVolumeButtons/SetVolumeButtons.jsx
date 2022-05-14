import "./SetVolumeButton.css";

//creates Set Volume button on Volume page with onclick functionality
//onclick new volume is sent to Back End via fetch command

function SetVolumeButtons({ onClick }) {

  return (
    <>
    
          <div className='SetVolumeButton' role = 'button' onClick = {onClick}>
              <div className='Text_Style'>
                  <span>Set New Volume</span>
              </div>
          </div>
    </>
  );
}

export default SetVolumeButtons;