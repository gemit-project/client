import React, { useState } from 'react'
import './filterTopComponent.css';
import { CiFilter } from "react-icons/ci";
import{ABCArr, ClarityArr, IconCol, IconsArr}from '../searchIcons/constants'
import { RxTriangleUp } from "react-icons/rx";
import FilterBasicComponent, { FilterAdvancedComponent, FilterGeneralComponent } from '../typeFilter/typeFilterComponent';
import Button from '@mui/material/Button';
import { width } from '@mui/system';
import BasicFilter from '../typeFilter/basic Filter';
import AdvancedFilter from '../typeFilter/advancedFilter';
import GeneralFilter from '../typeFilter/generalFilter';


export default function FilterTopComponent() {
    const [switchTypeFilter,setSwitchTypeFilter]=useState("basic");

    return (
        <>
        {/* inline style דריסת העיצוב רק ע"י  */}
            <div className='reka'><br />              
                    <Button variant="contained" size="small"
                        style={{
                        backgroundColor: '#D200FF',
                        // marginLeft: '2vw',
                        margin:'auto',
                        height:'20px',
                        width:'100px'
                    }} onClick={x=>setSwitchTypeFilter("basic")}>Basic</Button>

                    <Button variant="contained" size="small"
                        style={{
                        backgroundColor: '#FF00FF',
                        margin:'auto',
                        height:'20px',
                        width:'100px'
                    }} onClick={x=>setSwitchTypeFilter("advanced")}>Advanced</Button>

                    <Button variant="contained" size="small"
                        style={{
                        backgroundColor: '#00B2FF',
                        margin:'auto',
                        height:'20px',
                        width:'100px'
                    }} onClick={x=>setSwitchTypeFilter("general")}>General</Button>
               
                    <Button variant="outlined" size="small" 
                    style={{
                        margin:'auto',
                        color:'black',
                        borderColor:'black',
                        height:'20px'
                    }}><CiFilter /> Apply</Button>
                    
                    <Button variant="outlined" size="small"
                    style={{
                        margin:'auto',
                        width:'0.1vi',
                        color:'black',
                        borderColor:'black',
                        height:'20px'
                    }}>x</Button>
                </div>
                <br /><br />
           <div>{switchTypeFilter==="basic"?<BasicFilter/>:switchTypeFilter==="advanced"?<AdvancedFilter/>:<GeneralFilter/>}</div>
            {/* switch */}
            <div></div>
        </>

    )

}







