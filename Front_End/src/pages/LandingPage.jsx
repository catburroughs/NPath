import "../Global.css";
import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import LandingButtons from "../components/Buttons/LandingButtons/LandingButtons";
import LandingText from "../components/LandingText/LandingText";

//displays Landing Page image, text, and buttons

function LandingPage() {

  return (
    <>
    <BackgroundImage />
    <LandingButtons />
    <LandingText />
    </>
  );


}

export default LandingPage;
