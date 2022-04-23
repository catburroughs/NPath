import { useState, useEffect } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import SendTouchpads from "./SendTouchpads";
import SetTouchpadButton from "../../Buttons/SetTouchpadButton/SetTouchpadButton";

export default function SetTouchpad({touchpads}) {
  const [assignedtouchpad, setAssignedTouchpad] = useState({});



  function handleClick(e) {
    {e.preventDefault();
        console.log(assignedtouchpad);
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
          onChange={(event) => {setAssignedTouchpad(prev => ({...prev, "1": event.target.value }))}}
          autoWidth
          label="Touchpads"
        >
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
          onChange={(event) => {setAssignedTouchpad(prev => ({...prev, "2": event.target.value }))}}
          autoWidth
          label="Touchpads"
        >
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
          onChange={(event) => {setAssignedTouchpad(prev => ({...prev, "3": event.target.value }))}}
          autoWidth
          label="Touchpads"
        >
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
          onChange={(event) => {setAssignedTouchpad(prev => ({...prev, "4": event.target.value }))}}
          autoWidth
          label="Touchpads"
        >
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
          onChange={(event) => {setAssignedTouchpad(prev => ({...prev, "5": event.target.value }))}}
          autoWidth
          label="Touchpads"
        >
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
          onChange={(event) => {setAssignedTouchpad(prev => ({...prev, "6": event.target.value }))}}
          autoWidth
          label="Touchpads"
        >
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
          onChange={(event) => {setAssignedTouchpad(prev => ({...prev, "7": event.target.value }))}}
          autoWidth
          label="Touchpads"
        >
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
          onChange={(event) => {setAssignedTouchpad(prev => ({...prev, "8": event.target.value }))}}
          autoWidth
          label="Touchpads"
        >
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
          onChange={(event) => {setAssignedTouchpad(prev => ({...prev, "9": event.target.value }))}}
          autoWidth
          label="Touchpads"
        >
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
          onChange={(event) => {setAssignedTouchpad(prev => ({...prev, "10": event.target.value }))}}
          autoWidth
          label="Touchpads"
        >
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
          onChange={(event) => {setAssignedTouchpad(prev => ({...prev, "11": event.target.value }))}}
          autoWidth
          label="Touchpads"
        >
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
          onChange={(event) => {setAssignedTouchpad(prev => ({...prev, "12": event.target.value }))}}
          autoWidth
          label="Touchpads"
        >
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
