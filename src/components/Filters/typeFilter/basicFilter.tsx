import React, { useEffect, useState } from 'react';
import './basicFilter.css';
import { ABCArr, ABCArrMore, ClarityArr, IconCol, IconsArr, MoreIconsArr } from '../searchIcons/constants'
import MenuItem from '@mui/material/MenuItem';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';
export default function BasicFilter() {
    const [num1, setNum1] = React.useState('');
    const [num2, setNum2] = React.useState('');
    const [color, setColor] = useState('');
    const [ch, setCh] = useState(false);
    const [more, setMore] = React.useState(false);
    const [heightShape, setHeightShape] = React.useState('28vh');
    const [moreColor, setMoreColor] = React.useState(false);
    const [heightShape2, setHeightShape2] = React.useState('28vh');

    const style1 = { width: '9vw', height: '30px' };
    const style2 = { backgroundColor: '#D200FF', borderBlockEnd: '1px solid white' };
    const style3 = { width: '9vw', height: '30px', marginLeft: '1vw', borderRadius: '3px' }
    const style4 = {
        borderWidth: '0px', marginLeft: '1vw', marginTop: '2vh', flexDirection: 'column',
        color: 'black', overflowWrap: 'break-word'
    }
    const style5 = {
        color: '#D200FF',  border: '1px solid black', height: '4.5vh',
        width: '4.7vw', display: 'flex', msFlexDirection: 'row'
    }
    const style6 = {
        color: 'black', backgroundColor: '#F3F3F3', border: '1px solid #D200FF', marginLeft: '2vw',
        marginTop: moreColor ? '1vh' : '2vh', height: '23px', width: moreColor ? '4.2vw' : '4vw'
    }

    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = { PaperProps: { style: { maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP, width: 150 } } };
    const arr = [1, 2, 3, 4, 5];
    const f: any = IconsArr.map(i => { return { ...i, checked: false } })
    const [currentShapes, setCurrentShapes] = useState(f)
    ////f2
    const f2: any = MoreIconsArr.map(i => { return { ...i, checked: false } })
    const [currentShapes2, setCurrentShapes2] = useState(f2)

    const handleChange1 = (event: SelectChangeEvent) => {
        setNum1(event.target.value);
    };
    const handleChange2 = (event: SelectChangeEvent) => {
        setNum2(event.target.value);
    };
    const h = () => {
        setMore(!more);
        if (!more)
            setHeightShape('52vh')
        else
            setHeightShape('28vh')
    }
    const h2 = () => {
        setMoreColor(!moreColor);
        if (!moreColor)
            setHeightShape2('36vh')
        else setHeightShape2('28vh')
    }

    return (
        <>
            <div className='block1Input'>
                <div className='shape' style={{ height: heightShape, marginBlock: more ? '0vh -24vh' : ''}}>
                    Shape<br />
                    <div>
                        {f.map((element: IconCol, i: number) =>
                            <Button variant="contained" size="small"
                                style={{
                                    background: '#F3F3F3',
                                    boxShadow: 'none',
                                }}
                                sx={style4} >
                                <img src={element.icon.toString()} className='img'></img>
                                {element.param}
                            </Button>
                        )}
                        {more ? f2.map((element: IconCol, i: number) =>
                            <Button variant="contained" size="small"
                                style={{
                                    background:'#F3F3F3',
                                    boxShadow: 'none',
                                }}
                                sx={style4}>
                                <img src={element.icon.toString()} className='img'></img>
                                {element.param}
                            </Button>
                        ) : ''}
                    </div>
                    <div>
                        <button onClick={x => { h() }} className='wrapArrowButtons'>
                            {more ? <button className='upButton1'  >▲</button> :
                                <button className='downButton1'>▼</button>}</button>
                    </div>
                </div>
                <div style={{ marginTop: '7vh', marginLeft: '6vw' }}><br />
                    <b >Carat (size)</b>
                    <br /><br />
                    <Select
                        value={num1}
                        onChange={handleChange1}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        style={style1}
                        MenuProps={MenuProps}
                        variant='outlined'
                        color='secondary' >
                        <MenuItem value="" style={style2}>
                            <em>any</em>
                        </MenuItem>
                        {arr.map((element: number) =>
                            <MenuItem value={element} style={style2}>{element}</MenuItem>
                        )}
                    </Select>
                    <label style={{ marginLeft: '1vw' }}>to</label>
                    <Select
                        className="bottom-div"
                        value={num2}
                        onChange={handleChange2}
                        displayEmpty
                        inputProps={{ 'aria-label': 'Without label' }}
                        MenuProps={MenuProps}
                        variant='outlined'
                        color='secondary'
                        style={style3}>
                        <MenuItem value="" style={style2}>
                            <em>any</em>
                        </MenuItem>
                        {arr.map((element: number) =>
                            <MenuItem value={element} style={style2}>{element}</MenuItem>
                        )}
                    </Select>
                </div>
            </div><br />
            <div className='block12'>
                <div className='clarity'>
                    Clarity<br />
                    <div className='inClarity'>
                        {ClarityArr.map((element: string[]) => <div className='ini'>{
                            element.map((el: string) =>
                                <Button variant="contained" size="small"
                                    style={{
                                        visibility: more ? 'hidden' : 'visible',
                                        backgroundColor: '#F3F3F3'
                                    }}
                                    sx={style5}
                                >{el} </Button>
                            )}</div>)}
                    </div>
                </div><br />
                <div className='color' style={{ height: heightShape2 }}>
                    Color<br />
                    <div className='wrap2Buttons'>
                        <button style={{ fontWeight: 'bold' }}>White</button>
                        <button style={{ fontWeight: 'bold' }}>Fancy</button>
                    </div>
                    {ABCArr.map((element: string) =>
                        <Button variant="contained" size="small" style={style6} >{element}</Button>)}
                    {moreColor ? ABCArrMore.map((element: string) =>
                        <Button variant="contained" size="small" style={style6} >{element}</Button>) : ''}
                    <button onClick={x => { h2() }} className='wrapArrowButtons' >
                        {moreColor ? <button className='upButton2' >▲</button> : <button className='dropButton2' >▼</button>}</button>
                </div><br />
            </div>
        </>
    )
}
