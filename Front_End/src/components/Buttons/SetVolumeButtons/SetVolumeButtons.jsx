import "./SetVolumeButton.css";



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