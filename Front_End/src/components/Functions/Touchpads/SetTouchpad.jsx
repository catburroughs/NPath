import { useState, useEffect } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectAutoWidth() {
  const [touchpadOne, setTouchpadOne] = useState("");
  const [touchpadTwo, setTouchpadTwo] = useState("");
  const [touchpads, setTouchpads] = useState([]);

  // Modify the current state by setting the new data to
  // the response from the backend
  useEffect(() => {
    fetch("http://localhost:5000/getsoundfiles", {
      methods: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => setTouchpads(response))
      .catch((error) => console.log(error));
  },[]);



  return (
    <div>
      <FormControl sx={{ m: 1, minWidth: 200 }}>
        <InputLabel id="Touchpad Selection">Touchpad 1</InputLabel>
        <Select
          labelId="Touchpad Selection One"
          defaultValue={""}
          value={touchpadOne}
          onChange={(event, value) => {console.log(value); setTouchpadOne(event.target.value)}}
          autoWidth
          label="Touchpads"
        ><MenuItem value="">
        <em>None</em>
      </MenuItem>
          {touchpads?.map(touchpad => (
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
