import "./BackgroundImage.css";
import background from "./labyrinthbackground.jpg";

//Creates background image seen in every page except the Touchpad Map page


function BackgroundImage() {

    return (
       
	<div id="Labyrinth_Background" className ="Labyrinth_Background">
		<img id="labyrinth2" src={background} >
		</img>
       
	</div>
    );
}

export default BackgroundImage;