import "./AboutNpathButton.css";
import { Link } from 'react-router-dom';


function AboutNpathButton() {

  return (
    <>
<Link to = '/ActivateBoard'>
<div className="AboutNpathButton" role = "button">
  <div className="Text_Style">
    <span>Activate NPath Board</span>
  </div>
</div>
</Link>
</>
  );
}

export default AboutNpathButton;