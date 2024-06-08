import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./slices/UserSlice";
import { DaimondSlice } from "./slices/DaimondSlice";
import { CheckoutSlice } from "./slices/CheckOutSlice";

export const reduxStore = configureStore({
    reducer: {
        user: UserSlice.reducer,
        daimond:DaimondSlice.reducer,
        checkOut:CheckoutSlice.reducer,
    }
})
