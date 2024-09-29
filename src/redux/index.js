import { configureStore } from "@reduxjs/toolkit";
import authReducer from './reduces/auth.reducer'
import { thunk } from "redux-thunk";

export const store = configureStore({
    reducer: {
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk)
})