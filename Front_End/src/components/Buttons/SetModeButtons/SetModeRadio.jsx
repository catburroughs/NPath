import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

//creates radio buttons next to mode components and sets current mode 
//takes the user's new mode and when Confirm Mode is clicked, passes the choice to a fetch commmand to be sent
//to the Back End via the Flask API

export default function ControlledRadioButtonsGroup({ currentmode, setCurrentMode}) {


  return (
     
    <FormControl >
      <FormLabel id="controlled-radio-buttons-group"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        value = {currentmode}
        onChange={(event, value) => {setCurrentMode(parseInt(value))}}
        sx={{
            '& .MuiSvgIcon-root': {
                fontSize: 80}
          }}
      >
        <FormControlLabel value="1" control={<Radio />} />
        <FormControlLabel value="2" control={<Radio />} />
        <FormControlLabel value="3" control={<Radio />}  />
      </RadioGroup>
    </FormControl>
  
  );
}
