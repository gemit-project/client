import React, { useEffect, useState } from 'react';
import './basicFilter.css';
import { ABCArr, ClarityArr, IconCol, IconsArr } from '../searchIcons/constants'
import { RxTriangleUp } from 'react-icons/rx'
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function BasicFilter() {
    const [num1, setNum1] = React.useState('');
    const [num2, setNum2] = React.useState('');
    const [color, setColor] = useState('');
    const [ch, setCh] = useState(false);
    const style1 = {
        width: '9vw',
        color: 'black',
        height: '30px'
    };

    //   <div style={style}></div>

    const arr = [1, 2, 3, 4, 5];
    const handleChange1 = (event: SelectChangeEvent) => {
        setNum1(event.target.value);
    };
    const handleChange2 = (event: SelectChangeEvent) => {
        setNum2(event.target.value);
    };
    const colorFunc = (event: IconCol, i: number) => {
        setColor('blue');
        setCh(true)
        setCurrentShapes(currentShapes[i].checked = ch)
        return color
    }
    const colorFunc2 = (event: IconCol, i: number) => {
        setColor('blue');
        colorFunc(event, i)
        return color;
    }
    const colorFunc3 = () => {
        setColor('blue');
        // colorFunc(event,i)
        return color;
    }
    // const funci = () =>{
    //     setCurrentShapes(f);
    //     setColor('blue');
    //     return color;
    // }

    const f: any = IconsArr.map(i => { return { ...i, checked:false } })

    const [currentShapes, setCurrentShapes] = useState(f)

    useEffect(() => {
        // return function colorFunc = (event: IconCol, i: number) => {
        //     setColor('blue');
        //     setCh(true)
        //     setCurrentShapes(f[i].checked = ch)
        
        // }
            
      }, [color]);
    
    // useEffect(() => {
    //     alert('bgfvdcf')
    //   }, [color]);



    // const [state, setState] = useState('');
    // useEffect(() => {
    //   // will run once at page load.
    //   // will run again when the specific value in the dependencies array changes.
    // //   return function cleanupListener() {
    // //     window.removeEventListener(setCh, () => { })
    // //   }
    // }, [state]);
  
    return (
        <>
            <div className='block1Input'>
                <div className='shape'>
                    Shape<br />
                    {/*כפתור חץ
                     <button><RxTriangleUp /></button> */}
                    {f.map((element: IconCol, i: number) =>
                        <Button variant="contained" size="small"
                            style={{
                                color: 'black',
                                background: currentShapes.checked ? colorFunc(element,i) : '#F3F3F3',
                                // backgroundColor: color,
                                borderWidth: '0px',
                                marginLeft: '1.5vw',
                                marginTop: '2vh',
                                flexDirection: 'column',
                                boxShadow: 'none',
                                overflowWrap:'break-word'

                            }} onClick={y => colorFunc2(element,i)}>
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
                        style={style1}
                    >
                        <MenuItem value="">
                            <em>any</em>
                        </MenuItem>
                        {arr.map((element: number) =>
                            <MenuItem value={element}>{element}</MenuItem>
                        )}
                    </Select>
                    <label style={{ marginLeft: '1vw' }}>to</label>
                    <Select
                        value={num2}
                        onChange={handleChange2}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        style={{
                            width: '9vw',
                            color: 'black',
                            height: '30px',
                            marginLeft: '1vw'
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
                {/* <div className="overflow-auto ..."> */}
                <div className='clarity'>
                    Clarity<br />
                    {ClarityArr.map((element: string) =>
                        <Button variant="contained" size="small"
                            style={{
                                color: 'black',
                                backgroundColor: '#F3F3F3',
                                border: '1px solid #D200FF',
                                marginLeft: '1.5vw',
                                marginTop: '2vh',
                                height: '30px',
                                width: '5vw',
                                // overflowX: 'visible'
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
                {/* </div> */}
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
                                color: 'black',
                                backgroundColor: '#F3F3F3',
                                border: '1px solid #D200FF',
                                marginLeft: '1.5vw',
                                marginTop: '2vh',
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


