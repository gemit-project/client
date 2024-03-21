import React from 'react'
import './filterTopComponent.css';
import { CiFilter } from "react-icons/ci";
import{ClarityArr, IconCol, IconsArr}from '../searchIcons/constants'

import FilterBasicComponent, { FilterAdvancedComponent, FilterGeneralComponent } from '../typeFilter/typeFilterComponent';


export default function FilterTopComponent() {
    return (
        <>
            <div className='reka'>

                <br />
                <button style={{
                    backgroundColor: '#D200FF'
                }} onClick={() => { <FilterBasicComponent /> }}>Basic</button>

                <button style={{
                    backgroundColor: '#FF00FF'
                }} >Advanced
                      {/* <FilterAdvancedComponent /> */}
                 </button>

                <button style={{
                    backgroundColor: '#00B2FF'
                }} >   General
                {/* <FilterGeneralComponent /> */}
                 </button>

                <button className='rightButton'><CiFilter /> Apply </button>
                <button className='rightButton'> x </button>
                <br /><br />
            </div>
            <br />
            <div className='block1Input'>
                <div className='block1'>
                    Shape<br/><br/>
                    {IconsArr.map((element:IconCol) => 
                <div className='inside'>{element.param} </div>                
               )}
                </div>
                <div>
                    <input></input>
                    <input></input>
                </div>
            </div><br />
            <div className='block12'>
            <div className='block2'>
                Clarity<br/><br/>
                {ClarityArr.map((element:string) => 
                <div className='inside'>{element} </div>              
               )}

            </div><br />
   
            <div className='block3'>
                    Color<br/><br/>
                    <div className="inside">third</div>
                    <div className="inside">third</div>
                    <div className="inside">third</div>
                    <div className="inside">third</div>

                </div><br />
                </div>

        </>

    )
}
//כשלוחצים על כפתור שיציג את הקומפוננטה שלו וכשלוחצים 
//על כפתור אחר שיסגור את הקומפוננטה הקודמת ויפתח את זאת


