import "./BackgroundImage.css";
//import labyrinth2 from "./labyrinth2_r@2x.png";
//import background from "./labyrinth2.jpg";
import background from "./labyrinthbackground.jpg";

function BackgroundImage() {

    return (
       
	<div id="Labyrinth_Background" class="Labyrinth_Background">
		<img id="labyrinth2" src={background} >
		</img>
       
	</div>
    );
}

export default BackgroundImage;