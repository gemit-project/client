import React from 'react';
import './basicFilter.css';
import { ABCArr, ClarityArr, IconCol, IconsArr } from '../searchIcons/constants'
import { RxTriangleUp } from 'react-icons/rx'
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';

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
                    Shape<br /><br />
                    {IconsArr.map((element: IconCol) =>
                        <div >
                            <img src={element.icon.toString()} className='inside1'></img> <br />
                            <label>{element.param}</label>
                        </div>
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
                            borderColor: 'red',
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
                            borderColor: 'red',
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
                    Clarity<br /><br />
                    {/* {ClarityArr.map((element:string) => 
                <div className='inside'>{element} </div>              
               )} */}

                    <div className='ini'>
                        <label className='inside'>{ClarityArr[0]}</label>
                        <label className='inside'>{ClarityArr[1]}</label>
                    </div>
                    {ClarityArr.map((element: string) =>
                        <label >
                            <label className='inside'>{element}</label>
                        </label>
                    )}
                </div><br />

                <div className='color'>
                    Color<br /><br />
                    {ABCArr.map((element: string) =>
                        <div className='inside3'>{element} </div>
                    )}
                    <button><RxTriangleUp /></button>
                </div><br />
            </div>
        </>
    )
}


