import "../Global.css";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import SoundFileUploader from "../components/Functions/SoundFileUploader";
import UploadSoundButton from "../components/Buttons/UploadSoundButton/UploadSoundButton";

//displays all upload sound components

function UploadSounds() {
  
  

  return (
    <>
    <BackgroundImage />
    <div className = "SoundfileBox">
    <SoundFileUploader  />
    </div>
    <UploadSoundButton />
    
    </>
  );


}

export default UploadSounds;