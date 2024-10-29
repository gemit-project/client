import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./slices/UserSlice";
import { DaimondSlice } from "./slices/DaimondSlice";
import { CheckoutSlice } from "./slices/CheckOutSlice";
import { CompareSlice } from "./slices/CompareSlice";

export const reduxStore = configureStore({
    reducer: {
        user: UserSlice.reducer,
        daimond:DaimondSlice.reducer,
        checkOut:CheckoutSlice.reducer,
        compare:CompareSlice.reducer,
    }
})
