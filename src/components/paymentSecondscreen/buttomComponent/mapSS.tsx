import { Checkbox, FormControlLabel, MenuItem, Select } from '@mui/material'
import React from 'react'
import './cssSecondScreen.css'

type mapSSProps = {
  name: string;
  list: Array<any>;
  icon:string;
}
export const MapSS: React.FC<mapSSProps> = ({name,list,icon}) => {

  return (
    <div className='container2'>
      <div className='first-line'><div className='title2'>{name}</div> <img alt="" style={{marginTop:'35px',marginLeft:'20px'}}  src={icon}></img></div>
      <div>
        {
          list.map((l: any) => (
            <div><Line text={l.text}></Line></div>
          ))
        }
      </div>
    </div>
  )
}
const Line: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div className='select'>
      <div><FormControlLabel control={<Checkbox />} label={text} /></div> 
      <div><Select sx={{ "& fieldset": { border: "none", }, }} value="1"><MenuItem value="1">$508.22</MenuItem></Select></div> 
    </div>
  )
}
