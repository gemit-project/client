import { purple } from '@mui/material/colors'
import React from 'react'
import { ABCArr, ClarityArr, IconCol, IconsArr } from '../searchIcons/constants'

export default function FilterBasicComponent() {
  return (
    <>
      <br />
      <br />
      <div>Basic</div>
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
          {ClarityArr.map((element: string) =>
            <div className='inside'>{element} </div>
          )}
        </div><br />
        <div className='block3'>
          Color<br /><br />
          {ABCArr.map((element: string) =>
            <div className='inside'>{element} </div>
          )}
        </div><br />
      </div>

    </>
  )
}

export const FilterAdvancedComponent = () => {
  return (
    <div>Advanced</div>
  )
}

export const FilterGeneralComponent = () => {
  return (
    <div>General</div>
  )
}




