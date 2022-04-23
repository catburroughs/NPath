import "./SetVolumeButton.css";



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