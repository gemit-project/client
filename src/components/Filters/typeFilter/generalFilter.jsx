import React from 'react'
import './generalFilter.css';
import Switch from '@mui/material/Switch';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';

export default function GeneralFilter() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    return (
        <>
            <div>
                <div className='wrap'>
                    <b>Price</b><br />
                    <div className='wrap2Input'>
                        <input type='text'></input>
                        <input type='text'></input>
                    </div>
                    <div className='wrap2Input'>
                        <input type='text'></input>
                        <input type='text'></input>
                    </div>
                    <div className='wrap2Input'>
                        <input type='text'></input>
                        <input type='text'></input>
                    </div>
                </div>
                <div className='switch'>
                    <Switch defaultChecked
                        sx={{
                            width: 300
                        }} />
                </div>
                <div className='select'>
                    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label">Age</InputLabel>
                        <Select
                            labelId="demo-select-small-label"
                            id="demo-select-small"
                            value={age}
                            label="Age"
                            onChange={handleChange}
                            width='200px'
                        // style={{ 'color': '#FF00FF', 'width': '150px' ,'marginLeft':'100px'}}
                        >
                            <MenuItem value="">
                                <em>None</em>
                            </MenuItem>
                            <MenuItem value={10}>Ten</MenuItem>
                            <MenuItem value={20}>Twenty</MenuItem>
                            <MenuItem value={30}>Thirty</MenuItem>
                        </Select>
                    </FormControl>
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




