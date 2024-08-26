import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CompareState {
    comparesDiamond: any[]; // or define a more specific type instead of 'any'
}

const initialState: CompareState = {
    comparesDiamond: []
}

export const CompareSlice = createSlice({
    name: 'compare',
    initialState: initialState,
    reducers: {

        setCompareDiamonds: (state, action:PayloadAction<any>)=> {
            state.comparesDiamond.push(action.payload)
        },
    }
})
export const {setCompareDiamonds} = CompareSlice.actions;


