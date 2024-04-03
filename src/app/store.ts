import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./slices/UserSlice";

export const reduxStore = configureStore({
    reducer: {
        user: UserSlice.reducer,

    }
})
