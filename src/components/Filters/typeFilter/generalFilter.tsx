import React from 'react'
import './generalFilter.css';
import Switch from '@mui/material/Switch';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
// import GeneralFilter from '../typeFilter/generalFilter';
import Card from '@mui/material/Card';

export default function GeneralFilter() {
    const [num1, setNum1] = React.useState('');
    const [num2, setNum2] = React.useState('');
    const [num3, setNum3] = React.useState('');

    const arr = [1, 2, 3, 4, 5];
    const handleChange1 = (event: SelectChangeEvent) => {
        setNum1(event.target.value);
    };
    const handleChange2 = (event: SelectChangeEvent) => {
        setNum2(event.target.value);
    };
    const handleChange3 = (event: SelectChangeEvent) => {
        setNum3(event.target.value);
    };

    return (
        <>
            <Card style={{backgroundColor:'#EDFAFF',display:'flex', height:'15vh', width:'78vw',marginTop:'4vh', marginLeft:'auto',marginRight:'auto'}}>
                <div>
                    <b style={{ marginLeft: '2vw' }}>Price</b><br />
                    <label>$ / CT</label>
                    <div className='wrap2Input'>
                        <input type='text' placeholder='From'></input>
                        <input type='text' placeholder='To'></input>
                    </div>
                </div>
                <div>
                    <b></b><br />
                    <label>Total ($)</label>
                    <div className='wrap2Input'>
                        <input type='text' placeholder='From'></input>
                        <input type='text' placeholder='To'></input>
                    </div>
                </div>
                <div>
                    <b></b><br />
                    <label>Discount (%)</label>
                    <div className='wrap2Input'>
                        <input type='text' placeholder='From'></input>
                        <input type='text' placeholder='To'></input>
                    </div>
                </div>
            </Card>
            <div className='switch'>
                <b>Natural / Lab</b><br/>
                <Switch defaultChecked
                    sx={{
                        width: 300
                    }} />
            </div>
            <div className='inputs'><br />
                <div><b>Period</b><br />
                    <Select
                        value={num1}
                        onChange={handleChange1}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        style={{
                            width: '12vw',
                            height: '30px'
                        }}>
                        <MenuItem value="">
                            <em>All</em>
                        </MenuItem>
                        {arr.map((element: number) =>
                            <MenuItem value={element}>{element}</MenuItem>
                        )}
                    </Select>
                </div>
                <div className='buttomInputs'>
                    <b>Location</b><br />
                    <Select
                        value={num2}
                        onChange={handleChange2}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        style={{
                            width: '12vw',
                            height: '30px',
                        }}>
                        <MenuItem value="">
                            <em>All</em>
                        </MenuItem>
                        {arr.map((element: number) =>
                            <MenuItem value={element}>{element}</MenuItem>
                        )}
                    </Select>
                </div>
                <div className='buttomInputs'>
                    <b>Vendors</b><br />
                    <Select
                        value={num3}
                        onChange={handleChange3}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        style={{
                            width: '12vw',
                            height: '30px',
                        }}>
                        <MenuItem value="">
                            <em>All</em>
                        </MenuItem>
                        {arr.map((element: number) =>
                            <MenuItem value={element}>{element}</MenuItem>
                        )}
                    </Select>
                </div>
            </div>
        </>
    )
}




// import * as React from 'react';
// import FormGroup from '@mui/material/FormGroup';
// import FormControlLabel from '@mui/material/FormControlLabel';
// import Switch from '@mui/material/Switch';

// export default function SwitchLabels() {
//   return (
//     <FormGroup>
//       <FormControlLabel control={<Switch defaultChecked />} label="Label" />
//       <FormControlLabel required control={<Switch />} label="Required" />
//       <FormControlLabel disabled control={<Switch />} label="Disabled" />
//     </FormGroup>
//   );
// }




