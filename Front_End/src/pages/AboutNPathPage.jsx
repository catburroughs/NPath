import BackgroundImage from "../components/BackgroundImage/BackgroundImage";
import AboutNpathButton from "../components/Buttons/AboutNpathButton/AboutNpathButton";


function AboutNPath() {

  return (
    <>
    <BackgroundImage />
    <div className="About_Container">
    Capacitive touch is a technology most widely known in phone, tablet, and pc touchscreens 
    but it can also be used on almost any surface with the electrical field established through 
    an electrically conducive areas created by carbon based paint or ink. Having worked with this 
    technology wherein a printed poster was interactive, producing sounds when certain areas were 
    touched, powered by a proprietary pcb, were triggered by human touch, I created an open source 
    version with a maze on paper over areas of capacitive touch panels. By lightly tracing a path 
    through the maze, the activated touchpads would play music or sounds, creating a new soundscape 
    for each new path traced. The device, known as an NPath Board, is controlled by a web application 
    run on the same raspberry pi which controls the board for wireless control and alteration of the board's functionality.
    </div>
    <AboutNpathButton />
    

    
    </>
  );


}

export default AboutNPath;
