import { useState, useEffect } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectAutoWidth({touchpads}) {
  const [touchpadOne, setTouchpadOne] = useState("");
  const [touchpadTwo, setTouchpadTwo] = useState("");



  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="Touchpad Selection">Touchpad 1</InputLabel>
        <Select
          labelId="Touchpad Selection One"
          value={""}
          onChange={(event, value) => {console.log(value); setTouchpadOne(value)}}
          autoWidth
          label="Touchpads"
        ><MenuItem value=""/>
          {touchpads.map(touchpad => (
            <MenuItem value={touchpad}
            key = {touchpad}>
                {touchpad}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
