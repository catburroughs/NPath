import "./LandingButtons.css";

function LandingButtons() {
  return (
    <>
      <div id="Activate_Board_Button" class="Activate_Board_Button">
        <svg class="Rectangle_17">
          <rect
            id="Rectangle_17"
            rx="38.5"
            ry="38.5"
            x="0"
            y="0"
            width="597"
            height="77"
          ></rect>
        </svg>
        <div id="Activate_NPath_Board">
          <span>Activate NPath Board</span>
        </div>
      </div>

      <div id="Set_Volume_Button" class="Set_Volume_Button">
        <svg class="Rectangle_16">
          <rect
            id="Rectangle_16"
            rx="38.5"
            ry="38.5"
            x="0"
            y="0"
            width="398"
            height="77"
          ></rect>
        </svg>
        <div id="Set_Volume">
          <span>Set Volume</span>
        </div>
      </div>

      <div id="Choose_Mode_Button" class="Choose_Mode_Button">
        <svg class="Rectangle_15">
          <rect
            id="Rectangle_15"
            rx="38.5"
            ry="38.5"
            x="0"
            y="0"
            width="398"
            height="77"
          ></rect>
        </svg>
        <div id="Choose_Mode">
          <span>Choose Mode</span>
        </div>
      </div>
    </>
  );
}

export default LandingButtons;
