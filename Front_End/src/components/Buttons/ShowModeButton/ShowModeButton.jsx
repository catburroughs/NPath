import "./ShowModeButton.css";

function ShowModeButton() {

    return (

      <Link to = '/AssignTouchpads'>
      <div id='Assign_Touchpads' role = 'button'>
          <div id='Text_Style'>
              <span>Assign Touchpads</span>
          </div>
      </div>
  </Link>
    );
}

export default ShowModeButton;