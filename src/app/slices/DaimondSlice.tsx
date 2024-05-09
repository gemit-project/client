import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentDaimond: {}
}

export const DaimondSlice = createSlice({
    name: 'daimond',
    initialState: initialState,
    reducers: {

        setCurrentDaimond: (state, action)=> {
            state.currentDaimond = action.payload
        },
    }
})
export const {setCurrentDaimond} = DaimondSlice.actions;


