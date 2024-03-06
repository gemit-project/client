import React from 'react'
import './filterTopComponent.css';
import { CiFilter } from "react-icons/ci";
import FilterBasicComponent, { FilterAdvancedComponent, FilterGeneralComponent } from '../typeFilter/typeFilterComponent';
export default function FilterTopComponent() {
    return (
        <>
            <br />
            <button style={{
                backgroundColor: 'D200FF'
            }} ><FilterBasicComponent /></button>

            <button style={{
                backgroundColor: 'rgb(252, 127, 200)'
            }} >  <FilterAdvancedComponent /> </button>

            <button style={{
                backgroundColor: 'rgb(113, 227, 247)'
            }} >   <FilterGeneralComponent /> </button>

            <button className='rightButton'><CiFilter /> Apply </button>
            <button className='rightButton'> x </button>

        </>
    )
}

