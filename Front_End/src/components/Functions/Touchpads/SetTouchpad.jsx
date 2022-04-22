import { useState, useEffect } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SendTouchpads from "./SendTouchpads";
import SetTouchpadButton from "../../Buttons/SetTouchpadButton/SetTouchpadButton";

export default function SetTouchpad({touchpads}) {
  const [assignedtouchpad, setAssignedTouchpad] = useState({"number":"","title":""});



  function handleClick(e) {
    {e.preventDefault();
      SendTouchpads(assignedtouchpad);
       
    }

  
  }


  return (
      <>
       <SetTouchpadButton onClick={handleClick} />
    <div>
      <FormControl sx={{ m: 2, minWidth: 200 }}>
        <InputLabel id="Touchpad Selection">Touchpad 1</InputLabel>
        <Select
          labelId="Touchpad Selection One"
          defaultValue={""}
          value={assignedtouchpad["1"]}   
          onChange={(event) => {setAssignedTouchpad(prev => ({...prev, number: "1", title: event.target.value }))}}
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
    <div>
        <FormControl sx={{ m: 2, minWidth: 200 }}>
        <InputLabel id="Touchpad Selection">Touchpad 2</InputLabel>
        <Select
          labelId="Touchpad Selection Two"
          defaultValue={""}
          value={assignedtouchpad["2"]}   //setPersonInfo(prev => {...prev, firstName: 'SOME_NAME'}) 
          onChange={(event) => {setAssignedTouchpad(prev => ({...prev, number: "2", title: event.target.value }))}}
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
    <div>
        <FormControl sx={{ m: 2, minWidth: 200 }}>
        <InputLabel id="Touchpad Selection">Touchpad 3</InputLabel>
        <Select
          labelId="Touchpad Selection Three"
          defaultValue={""}
          value={assignedtouchpad["3"]}   //setPersonInfo(prev => {...prev, firstName: 'SOME_NAME'}) 
          onChange={(event) => {setAssignedTouchpad(prev => ({...prev, number: "3", title: event.target.value }))}}
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
    <div>
        <FormControl sx={{ m: 2, minWidth: 200 }}>
        <InputLabel id="Touchpad Selection">Touchpad 4</InputLabel>
        <Select
          labelId="Touchpad Selection Four"
          defaultValue={""}
          value={assignedtouchpad["4"]}   //setPersonInfo(prev => {...prev, firstName: 'SOME_NAME'}) 
          onChange={(event) => {setAssignedTouchpad(prev => ({...prev, number: "4", title: event.target.value }))}}
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
    <div>
        <FormControl sx={{ m: 2, minWidth: 200 }}>
        <InputLabel id="Touchpad Selection">Touchpad 5</InputLabel>
        <Select
          labelId="Touchpad Selection Five"
          defaultValue={""}
          value={assignedtouchpad["5"]}   //setPersonInfo(prev => {...prev, firstName: 'SOME_NAME'}) 
          onChange={(event) => {setAssignedTouchpad(prev => ({...prev, number: "5", title: event.target.value }))}}
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
    <div>
        <FormControl sx={{ m: 2, minWidth: 200 }}>
        <InputLabel id="Touchpad Selection">Touchpad 6</InputLabel>
        <Select
          labelId="Touchpad Selection Six"
          defaultValue={""}
          value={assignedtouchpad["6"]}   //setPersonInfo(prev => {...prev, firstName: 'SOME_NAME'}) 
          onChange={(event) => {setAssignedTouchpad(prev => ({...prev, number: "6", title: event.target.value }))}}
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
    <div>
        <FormControl sx={{ m: 2, minWidth: 200 }}>
        <InputLabel id="Touchpad Selection">Touchpad 7</InputLabel>
        <Select
          labelId="Touchpad Selection Seven"
          defaultValue={""}
          value={assignedtouchpad["7"]}   //setPersonInfo(prev => {...prev, firstName: 'SOME_NAME'}) 
          onChange={(event) => {setAssignedTouchpad(prev => ({...prev, number: "7", title: event.target.value }))}}
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
    <div>
        <FormControl sx={{ m: 2, minWidth: 200 }}>
        <InputLabel id="Touchpad Selection">Touchpad 8</InputLabel>
        <Select
          labelId="Touchpad Selection Eight"
          defaultValue={""}
          value={assignedtouchpad["8"]}   //setPersonInfo(prev => {...prev, firstName: 'SOME_NAME'}) 
          onChange={(event) => {setAssignedTouchpad(prev => ({...prev, number: "8", title: event.target.value }))}}
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
    <div>
        <FormControl sx={{ m: 2, minWidth: 200 }}>
        <InputLabel id="Touchpad Selection">Touchpad 9</InputLabel>
        <Select
          labelId="Touchpad Selection Nine"
          defaultValue={""}
          value={assignedtouchpad["9"]}   //setPersonInfo(prev => {...prev, firstName: 'SOME_NAME'}) 
          onChange={(event) => {setAssignedTouchpad(prev => ({...prev, number: "9", title: event.target.value }))}}
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
    <div>
        <FormControl sx={{ m: 2, minWidth: 200 }}>
        <InputLabel id="Touchpad Selection">Touchpad 10</InputLabel>
        <Select
          labelId="Touchpad Selection Ten"
          defaultValue={""}
          value={assignedtouchpad["10"]}   //setPersonInfo(prev => {...prev, firstName: 'SOME_NAME'}) 
          onChange={(event) => {setAssignedTouchpad(prev => ({...prev, number: "10", title: event.target.value }))}}
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
    <div>
        <FormControl sx={{ m: 2, minWidth: 200 }}>
        <InputLabel id="Touchpad Selection">Touchpad 11</InputLabel>
        <Select
          labelId="Touchpad Selection Eleven"
          defaultValue={""}
          value={assignedtouchpad["11"]}   //setPersonInfo(prev => {...prev, firstName: 'SOME_NAME'}) 
          onChange={(event) => {setAssignedTouchpad(prev => ({...prev, number: "11", title: event.target.value }))}}
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
    <div>
        <FormControl sx={{ m: 2, minWidth: 200 }}>
        <InputLabel id="Touchpad Selection">Touchpad 12</InputLabel>
        <Select
          labelId="Touchpad Selection Twelve"
          defaultValue={""}
          value={assignedtouchpad["12"]}   //setPersonInfo(prev => {...prev, firstName: 'SOME_NAME'}) 
          onChange={(event) => {setAssignedTouchpad(prev => ({...prev, number: "12", title: event.target.value }))}}
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
    </>
  );
}
