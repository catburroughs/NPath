import "./BackgroundImage.css";
import background from "./labyrinthbackground.jpg";

function BackgroundImage() {

    return (
       
	<div id="Labyrinth_Background" className ="Labyrinth_Background">
		<img id="labyrinth2" src={background} >
		</img>
       
	</div>
    );
}

export default BackgroundImage;