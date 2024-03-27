import { createSlice } from "@reduxjs/toolkit";
import {
    TypedUseSelectorHook,
    useSelector as useReduxSelector,
  } from "react-redux";
//import reduxStore from "../../store";
  
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
//export const useSelector: TypedUseSelectorHook<ReduxState> = useReduxSelector;
export const {setCurrentUser, editCurrentUser} = UserSlice.actions;

// export type ReduxStore = typeof reduxStore;
// export type ReduxState = ReturnType<typeof reduxStore.getState>;
// export type ReduxDispatch = typeof reduxStore.dispatch;

