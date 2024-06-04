import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import './advancedFilter.css';
import Button from '@mui/material/Button';

function valuetext(value: number) { return `${value}°C`; }
const itemsArr: string[] = ['IDEAL', 'EXCELENT', 'VERY GOOD', 'GOOD', 'FAIR']
const wordsArr: string[] = ['GIA', 'RAP', 'AGS', 'HRD', 'IGI', 'RDC', 'CGL', 'DCLA', 'GCAL', 'DBGIS', 'GSI', 'GWLAB', 'NFTC', 'PGS', 'NONE']

export default function RangeSlider() {
    const [value1, setValue1] = React.useState<number[]>([0, 100]);
    const [value2, setValue2] = React.useState<number[]>([0, 100]);
    const [value3, setValue3] = React.useState<number[]>([0, 100]);
    const [value4, setValue4] = React.useState<number[]>([0, 100]);
    const style1 = { 'color': '#FF00FF' };
    const style2 = { color: '#FF00FF', backgroundColor: '#F3F3F3', marginLeft: '1vw', marginTop: '2vh', border: '1px solid black' }

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
                        style={style1}
                        getAriaValueText={valuetext}
                    />
                    {itemsArr.map((element: string) =>
                        <label >{element} </label>
                    )}
                </Box>
                <Box className="box">
                    <b>Flourance</b>
                    <Slider
                        size="small"
                        onChange={handleChange4}
                        value={value4}
                        style={style1}
                        getAriaValueText={valuetext}
                    />
                    <label>NONE</label>
                    <label>FAINT</label>
                    <label>MEDIUM</label>
                    <label>STRONG</label>
                    <label>VERY STRONG</label>
                </Box>
            </div >
            <div className='IWrap'>
                <Box className="box" style={{ marginTop: '4vh' }}>
                    <b>Symetry</b>
                    <Slider
                        size="small"
                        onChange={handleChange2}
                        value={value2}
                        style={style1}
                        getAriaValueText={valuetext}
                    />
                    {itemsArr.map((element: string) =>
                        <label>{element} </label>
                    )}
                </Box>
                <div className='grayBox'>
                    <b>Lab</b>
                    <br />
                    {wordsArr.map((element: string) =>
                        <Button variant="contained" size="small"
                            style={style2}>
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
                        style={style1}
                        getAriaValueText={valuetext}
                    />
                    {itemsArr.map((element: string) =>
                        <label >{element} </label>
                    )}
                </Box>
                <div className='inputWrap'>
                    <b>Inscription</b><br />
                    <input placeholder='Inscription (e.g. GIA7241171554)' className='input'></input>
                </div>
            </div>
        </>
    );
}