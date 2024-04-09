import React from 'react';
import './basicFilter.css';
import { ABCArr, ClarityArr, IconCol, IconsArr } from '../searchIcons/constants'
import { RxTriangleUp } from 'react-icons/rx'
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function BasicFilter() {
    const [num1, setNum1] = React.useState('');
    const [num2, setNum2] = React.useState('');

    const arr = [1, 2, 3, 4, 5];
    const handleChange1 = (event: SelectChangeEvent) => {
        setNum1(event.target.value);
    };
    const handleChange2 = (event: SelectChangeEvent) => {
        setNum2(event.target.value);
    };

    return (
        <>
            <div className='block1Input'>
                <div className='shape'>
                    Shape<br />
                    {IconsArr.map((element: IconCol) =>
                        <Button variant="contained" size="small"
                        style={{
                            color:'black',
                            backgroundColor:'#F3F3F3',
                            borderWidth: '0px',
                            marginLeft: '1.5vw',
                            marginTop:'2vh',
                            flexDirection:'column',
                            boxShadow:'none'
                            
                        }}>
                            <img src={element.icon.toString()} className='img'></img>
                            {element.param}
                        </Button>
                    )}
                </div>
                <div className='inputs'><br />
                    <b>Carat (size)</b><br /><br />
                    <Select
                        value={num1}
                        onChange={handleChange1}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        style={{
                            width: '9vw',
                            color: 'black',
                            //צבע מסגרת לא עובד
                            height: '30px'
                        }}
                    >
                        <MenuItem value="">
                            <em>any</em>
                        </MenuItem>
                        {arr.map((element: number) =>
                            <MenuItem value={element}>{element}</MenuItem>
                        )}
                    </Select>
                    <label style={{marginLeft:'1vw'}}>to</label>
                    <Select
                        value={num2}
                        onChange={handleChange2}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        style={{
                            width: '9vw',
                            color: 'black',
                            //צבע מסגרת לא עובד
                            border: 'red',
                            height: '30px',
                            marginLeft:'1vw'
                        }}
                    >
                        <MenuItem value="">
                            <em>any</em>
                        </MenuItem>
                        {arr.map((element: number) =>
                            <MenuItem value={element}>{element}</MenuItem>
                        )}
                    </Select>
                </div>
            </div><br />
            <div className='block12'>
                <div className='clarity'>
                    Clarity<br />
                    {ClarityArr.map((element:string) => 
                        <Button variant="contained" size="small"
                        style={{
                            color:'black',
                            backgroundColor:'#F3F3F3',
                            border: '1px solid #D200FF',
                            marginLeft: '1.5vw',
                            marginTop:'2vh',
                            height: '30px',
                            width: '5vw'
                        }} >{element} </Button>              
                     )}

                    {/* <div className='ini'>
                        <label className='inside'>{ClarityArr[0]}</label>
                        <label className='inside'>{ClarityArr[1]}</label>
                    </div>
                    {ClarityArr.map((element: string) =>
                        <label >
                            <label className='inside'>{element}</label>
                        </label>
                    )} */}
                </div><br />

                <div className='color'>
                    Color<br />
                    <div className='wrap2Buttons'>
                        <button>White</button>
                        <button>Fancy</button>
                    </div>
                    {ABCArr.map((element: string) =>
                        // <Button >{element} </Button>
                        <Button variant="contained" size="small"
                        style={{
                            color:'black',
                            backgroundColor:'#F3F3F3',
                            border: '1px solid #D200FF',
                            marginLeft: '1.5vw',
                            marginTop:'2vh',
                            height: '25px',
                            width: '4vw'
                        }} >{element}</Button>

                    )}
                    <button><RxTriangleUp /></button>
                </div><br />
            </div>
        </>
    )
}


