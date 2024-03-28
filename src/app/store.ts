import React from "react";
import { configureStore } from "@reduxjs/toolkit";
import { UserSlice } from "./slices/UserSlice/userSlice";

export const store = configureStore({
    reducer: {
        user: UserSlice.reducer,

    }
})
