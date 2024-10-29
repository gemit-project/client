import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CompareState {
    comparesDiamond: any[]; // or define a more specific type instead of 'any'
    isClose:boolean;
}

const initialState: CompareState = {
    comparesDiamond: [],
    isClose:false
}

export const CompareSlice = createSlice({
    name: 'compare',
    initialState: initialState,
    reducers: {

        setCompareDiamonds: (state, action:PayloadAction<any>)=> {
            state.comparesDiamond.push(action.payload)
        },
        setIsClose:(state, action:PayloadAction<any>)=>{
            state.isClose=action.payload
        }
    }
})
export const {setCompareDiamonds,setIsClose} = CompareSlice.actions;


