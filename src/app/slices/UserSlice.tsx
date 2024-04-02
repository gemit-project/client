import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentUser: {}
}

export const UserSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {

        setCurrentUser: (state, action)=> {
            state.currentUser = action.payload
        },
        editCurrentUser: (state, action) => {

        }
    }
})
export const {setCurrentUser, editCurrentUser} = UserSlice.actions;


