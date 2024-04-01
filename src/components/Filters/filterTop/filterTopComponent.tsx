import React from 'react'
import './filterTopComponent.css';
import { CiFilter } from "react-icons/ci";
import{ABCArr, ClarityArr, IconCol, IconsArr}from '../searchIcons/constants'
import { RxTriangleUp } from "react-icons/rx";


import FilterBasicComponent, { FilterAdvancedComponent, FilterGeneralComponent } from '../typeFilter/typeFilterComponent';


export default function FilterTopComponent() {
    return (
        <>
            <div className='reka'><br />
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
                <div >
                    <img src={element.icon.toString()} className='inside1'></img> <br/>
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
                Clarity<br/><br/>
                {/* {ClarityArr.map((element:string) => 
                <div className='inside'>{element} </div>              
               )} */}

               <div className='ini'>
                    <label className='inside'>{ClarityArr[0] }</label>
                    <label className='inside'>{ClarityArr[1] }</label>
                </div>
                {ClarityArr.map((element:string) =>                
                <label >
                    <label className='inside'>{element}</label>
                </label> 
               )}
            </div><br />
   
            <div className='block3'>
                    Color<br/><br/>
                    {ABCArr.map((element:string) => 
                <div className='inside3'>{element} </div>              
               )}
               <button><RxTriangleUp /></button>
                </div><br />
                </div>

        </>

    )


//     import { RxTriangleDown } from "react-icons/rx";
// <RxTriangleDown />
// import { BiCaretUp } from "react-icons/bi";
// <BiCaretUp />
// import { BiCaretDown } from "react-icons/bi";
// <BiCaretDown />
}
//כשלוחצים על כפתור שיציג את הקומפוננטה שלו וכשלוחצים 
//על כפתור אחר שיסגור את הקומפוננטה הקודמת ויפתח את זאת








