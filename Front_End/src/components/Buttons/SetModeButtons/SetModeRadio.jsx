import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import "./SetModeRadio.css"


export default function ControlledRadioButtonsGroup({ newmode, setNewMode, currentmode, setCurrentMode}) {


  return (
     
    <FormControl>
      <FormLabel id="controlled-radio-buttons-group"></FormLabel>
      <RadioGroup
        aria-labelledby="demo-controlled-radio-buttons-group"
        defaultChecked = {currentmode}
        value = {currentmode}
        onChange={(event, value) => {setNewMode(parseInt(value)); setCurrentMode(newmode)}}
        sx={{
            
            pt: 17,
            pl: 75,
            pr: 20,
            mb: 2,
            ml: 23,
            mr: 80,
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