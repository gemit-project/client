import React from 'react'
import FilterTopComponent from './filterTop/filterTopComponent'
import BasicSelect from '../design'
//app הדף הזה נטען ב
//בו נציג את כל הקומפוננטות שלנו
export default function Filter() {
    return (
        <>
            <FilterTopComponent />
            <BasicSelect/>
        </>
    )
}
