import { CheckBox } from '@mui/icons-material'
import { Checkbox, FormControl, FormControlLabel,Icon, FormGroup, InputLabel, MenuItem, Select, TextField } from '@mui/material'
import React from 'react'
import Vector from 'client\src\assets\Vector.svg'
import truck from '../../../assets/checkoutIcons/truck.svg'
import vi from '../../../assets/checkoutIcons/vi.svg'
export default function ShippingOptions() {
  return (
    <div>
       
        {/* <div style={{width: '100vw',height:'60vh',marginBottom:20, color: 'black', fontSize: 24, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'uppercase', lineHeight: 28.80, wordWrap: 'break-word'}}>Shipping options </div> */}
        {/* <div><CheckBox></CheckBox>Secure Courier Services</div> 
        <div><CheckBox></CheckBox>Air Freight</div> 
        <div><CheckBox></CheckBox>Private Jet Cargo Services</div>  */}

<FormGroup>
<div style={{width: '100vw', color: 'black', fontSize: 20, fontFamily: 'Poppins', fontWeight: '500', textTransform: 'uppercase', lineHeight: 32.80, wordWrap: 'break-word'}}>Shipping options<img src={truck}></img> </div>

  <div style={{marginTop:-320}} ><FormControlLabel  control={<Checkbox  />} label="Secure Courier Services" />
    <Select sx={{"& fieldset": {border: "none",},}}value="1"><MenuItem value="1">$508.22</MenuItem></Select>
  </div>
  
  <div style={{marginBlockEnd:'30'}}><FormControlLabel  control={<Checkbox />} label="Air Freight" />
  <Select sx={{"& fieldset": {border: "none",},}}value="2"><MenuItem value="2">$630.59</MenuItem></Select>
    </div>
  <div><FormControlLabel  control={<Checkbox />} label="Private Jet Cargo Services" />
  <Select sx={{"& fieldset": {border: "none",},}}value="3"><MenuItem value="3">$865.89</MenuItem></Select>
  </div>
</FormGroup>





 </div>
  )
}
