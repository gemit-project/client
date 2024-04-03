import React from 'react'
import { ABCArr, ClarityArr, IconCol, IconsArr } from '../searchIcons/constants'
import { RxTriangleUp } from 'react-icons/rx'

export default function BasicFilter() {
    return (
        <>
            <br />
            <div className='block1Input'>
                <div className='block1'>
                    Shape<br /><br />
                    {IconsArr.map((element: IconCol) =>
                        <div >
                            <img src={element.icon.toString()} className='inside1'></img> <br />
                            <label>{element.param}</label>
                        </div>
                    )}
                </div>
                <div>
                    <input></input>
                    <input></input>
                </div>
            </div><br />
            <div className='block12'>
                <div className='block2'>
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

                <div className='block3'>
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


