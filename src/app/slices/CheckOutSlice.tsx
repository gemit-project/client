import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isCheckout: false
}

export const CheckoutSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {

        setIsCheckOut: (state, action)=> {
            state.isCheckout = action.payload
        },
    }
})
export const {setIsCheckOut} = CheckoutSlice.actions;


