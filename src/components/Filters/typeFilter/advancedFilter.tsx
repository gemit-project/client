
//ניסוי 1 slider

// import * as React from 'react';
// import Box from '@mui/material/Box';
// import Stack from '@mui/material/Stack';
// import Slider from '@mui/material/Slider';
// import VolumeDown from '@mui/icons-material/VolumeDown';
// import VolumeUp from '@mui/icons-material/VolumeUp';
// import './advancedFilter.css';

// export default function ContinuousSlider() {
//     const [value, setValue] = React.useState<number>(0);

//     const handleChange = (event: Event, newValue: number | number[]) => {      
//         setValue(newValue as number);
//         switch(newValue){
//             case 5: alert("hnnbgffd");break;
//             case 0: alert("hnnbgffd");break;
//             case 100: alert("hnnbgffd");break;
//         }
//     };

//     return (
//         <Box sx={{ width: 580, marginLeft: 10 }}>
//             <b>Cut</b>
//             <Stack direction="row" alignItems="center">
//                 <Slider aria-label="Volume" value={value} onChange={handleChange} />
//             </Stack>
//             {/* <Stack direction="row" alignItems="center">
//                 <Slider aria-label="Volume" value={value} onChange={handleChange} />
//             </Stack> */}
//             <label>IDEAL</label>
//             <label>EXCELENT</label>
//             <label>VERY GOOD</label>
//             <label>GOOD</label>
//             <label>FAIR</label>
//         </Box>
//     );
// }

// חלוקת העמוד לפי 6 חלקים שווים

// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Grid from '@mui/material/Grid';
// import Paper from '@mui/material/Paper';
// import Box from '@mui/material/Box';
// import { Height } from '@mui/icons-material';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));

// export default function RowAndColumnSpacing() {
//     return (
//         <Box sx={{ width: '100%' }}>
//             <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
//                 <Grid item xs={6} >
//                     <Item sx={{height:'25vh'}}>         
//                     </Item>
//                 </Grid>
//                 <Grid item xs={6}>
//                     <Item sx={{height:'25vh'}}>2</Item>
//                 </Grid>
//                 <Grid item xs={6}>
//                     <Item sx={{height:'25vh'}}>3</Item>
//                 </Grid>
//                 <Grid item xs={6}>
//                     <Item sx={{height:'25vh'}}>4</Item>
//                 </Grid>
//                 <Grid item xs={6}>
//                     <Item sx={{height:'25vh'}}>5</Item>
//                 </Grid>
//                 <Grid item xs={6}>
//                     <Item sx={{height:'25vh'}}>6</Item>
//                 </Grid>
//             </Grid>
//         </Box>
//     );
// }


// <div className='grayBox' style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', padding: '5px' }}>
//     <b>Lab</b>
//     <br />
//     {wordsArr.map((element: string) =>
//         <div style={{ width: '40px', height: '5px' }}>
//             <label className='word' >{element} </label>
//         </div>
//     )}
// </div>




//ניסוי 4 slider

import * as React from 'react';
import Box from '@mui/material/Box';
import Slider, { SliderValueLabel } from '@mui/material/Slider';
import './advancedFilter.css';
import Button from '@mui/material/Button';

function valuetext(value: number) {
    return `${value}°C`;
}

const itemsArr: string[] = [
    'IDEAL', 'EXCELENT', 'VERY GOOD', 'GOOD', 'FAIR'
]

const wordsArr: string[] = [
    'GIA', 'RAP', 'AGS', 'HRD', 'IGI', 'RDC', 'CGL', 'DCLA', 'GCAL', 'DBGIS', 'GSI', 'GWLAB', 'NFTC', 'PGS', 'NONE'
]

export default function RangeSlider() {
    const [value1, setValue1] = React.useState<number[]>([0, 100]);
    const [value2, setValue2] = React.useState<number[]>([0, 100]);
    const [value3, setValue3] = React.useState<number[]>([0, 100]);
    const [value4, setValue4] = React.useState<number[]>([0, 100]);
    const [value, setValue] = React.useState<number>(0);
    const handleChange= (event: Event, newValue: number | number[]) => {
        setValue(newValue as number);
        alert(value as number /2)
    };

    const updateValue = (num: number | number[]) => {
        switch (num) {
            case 0: alert("0"); break;
            case 100: alert("100"); break;
            case 50: alert("50"); break;

        }
    }

    const handleChange1 = (event: Event, newValue: number | number[]) => {
        setValue1(newValue as number[]);
        updateValue(newValue);
        alert(newValue)
    };
    const handleChange2 = (event: Event, newValue: number | number[]) => {
        setValue2(newValue as number[]);
    };
    const handleChange3 = (event: Event, newValue: number | number[]) => {
        setValue3(newValue as number[]);
    };
    const handleChange4 = (event: Event, newValue: number | number[]) => {
        setValue4(newValue as number[]);
    };




    return (
        <>
            <br />
            <div className='IWrap'>
                <Box className="box" >
                    <b>Cut</b>
                    <Slider
                        size="small"
                        onChange={handleChange1}
                        value={value1}
                        style={{ 'color': '#FF00FF' }}
                        getAriaValueText={valuetext}
                    />

                    {itemsArr.map((element: string) =>
                        <label >{element} </label>
                    )}
                </Box>
                <Box className="box">
                    <b>Flourance</b>
                    {/* <Slider
                        size="small"
                        onChange={handleChange4}
                        value={value4}
                        style={{ 'color': '#FF00FF' }}
                        getAriaValueText={valuetext}
                    />
                    <label>NONE</label>
                    <label>FAINT</label>
                    <label>MEDIUM</label>
                    <label>STRONG</label>
                    <label>VERY STRONG</label> */}

                    <Slider
                        max={999}
                        min={1}
                        onChange={handleChange}
                        value={value}
                        valueLabelDisplay="auto"
                    ></Slider>

                </Box>
            </div >
            <div className='IWrap'>
                <Box className="box" style={{ marginTop: '4vh' }}>
                    <b>Symetry</b>
                    <Slider
                        size="small"
                        onChange={handleChange2}
                        value={value2}
                        style={{ 'color': '#FF00FF' }}
                        getAriaValueText={valuetext}
                    />
                    {itemsArr.map((element: string) =>
                        <label >{element} </label>
                    )}
                </Box>
                <div className='grayBox'>
                    <b>Lab</b>
                    <br />
                    {wordsArr.map((element: string) =>
                        <Button variant="contained" size="small"
                            style={{
                                color: '#FF00FF',
                                backgroundColor: '#F3F3F3',
                                marginLeft: '1.5vw',
                                marginTop: '2vh',
                                border: '1px solid black'

                            }}>
                            {element} </Button>
                    )}
                </div>
            </div>
            <div className='IWrap'>
                <Box className="box">
                    <b>Polish</b>
                    <Slider
                        size="small"
                        onChange={handleChange3}
                        value={value3}
                        style={{ 'color': '#FF00FF' }}
                        getAriaValueText={valuetext}
                    />
                    {itemsArr.map((element: string) =>
                        <label >{element} </label>
                    )}
                </Box>
                <div className='inputWrap'>
                    <b>Inscription</b><br /><br />
                    <input placeholder='Inscription (e.g. GIA7241171554)' className='input'></input>
                </div>
            </div>
        </>
    );
}