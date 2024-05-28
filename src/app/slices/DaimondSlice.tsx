import { createSlice } from "@reduxjs/toolkit";
import { DaimondStore } from "../../Types/DaimondStore";

const initialState = {
     currentDaimond:{}
    // {attributes: {
    //     description: typeof "",
    //     deleted:typeof true,
    //     geolocation: string;
    //     createdAt: Date;
    //     state: string;
    //     availabilityPlan:typeof availabilityPlan;
    //     metadata: {};
    //     price:typeof Money;
    //     publicData:typeof publicData;
    //     title: string;
    //   };
    //   id:typeof UUID ;
    //   type: "listing";
//}
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


