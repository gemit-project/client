import React from 'react'
import FilterTopComponent from './filterTop/filterTopComponent'
import RangeSlider from './typeFilter/advancedFilter'


//app הדף הזה נטען ב
//בו נציג את כל הקומפוננטות שלנו
export default function Filter() {
    return (
        <>
        {/* כדי לראות את הדף השני שיצרתי - תפתחי כאן את הקומפוננטה השניה*/}
            <FilterTopComponent />
            {/* <RangeSlider/> */}
        </>
    )
}