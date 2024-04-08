import React, { useState } from 'react'
import './filterTopComponent.css';
import { CiFilter } from "react-icons/ci";
import Button from '@mui/material/Button';
import BasicFilter from '../typeFilter/basicFilter';
import AdvancedFilter from '../typeFilter/advancedFilter';
import GeneralFilter from '../typeFilter/generalFilter';
import Card from '@mui/material/Card';

export default function FilterTopComponent() {
    const [switchTypeFilter, setSwitchTypeFilter] = useState("basic");

    return (
        <>
            <b className='firstSentence'>No Filter Criteria was selected</b>
            {/* לשנות את צבע המסגרת עבור כל סוג סינון */}
            <Card sx={{ minWidth: 275 }} style={{ marginLeft: '6vw', width: '86vw', height: '80vh', marginTop: '2vh' }}>
                {/* inline style דריסת העיצוב רק ע"י  */}
                <div className='reka'><br />
                    <Button variant="contained" size="small"
                        style={{
                            backgroundColor: '#D200FF',
                            marginLeft: '5vw',
                            height: '25px',
                            width: '100px'
                        }} onClick={x => setSwitchTypeFilter("basic")}>Basic</Button>

                    <Button variant="contained" size="small"
                        style={{
                            backgroundColor: '#FF00FF',
                            marginLeft: '5vw',
                            height: '25px',
                            width: '100px'
                        }} onClick={x => setSwitchTypeFilter("advanced")}>Advanced</Button>

                    <Button variant="contained" size="small"
                        style={{
                            backgroundColor: '#00B2FF',
                            marginLeft: '5vw',
                            height: '25px',
                            width: '100px'
                        }} onClick={x => setSwitchTypeFilter("general")}>General</Button>

                    <Button variant="outlined" size="small"
                        style={{
                            marginLeft: '38vw',
                            color: 'black',
                            borderColor: 'black',
                            height: '25px'
                        }}><CiFilter /> Apply</Button>

                    <Button variant="outlined" size="small"
                        style={{
                            marginLeft: '3vw',
                            width: '0.1vi',
                            color: 'black',
                            borderColor: 'black',
                            height: '25px'
                        }}>x</Button>
                </div>
                <br />
                <div>{switchTypeFilter === "basic" ? <BasicFilter /> : switchTypeFilter === "advanced" ? <AdvancedFilter /> : <GeneralFilter />}</div>
            </Card>
        </>

    )

}







