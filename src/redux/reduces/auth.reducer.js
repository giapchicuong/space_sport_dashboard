import { createSlice } from "@reduxjs/toolkit"
import { login } from "../actions/auth.action"
import { toast } from "react-toastify"

const initialState = {
    nameUser: null,
    account: null,
    isAuthenticated: false,
    loadingLogin: false,
    errorLogin: null,
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {

    },
    extraReducers: (builder) => {
        // Login
        builder.addCase(login.pending, (state, action) => {
            state.loadingLogin = true
        })

        builder.addCase(login.fulfilled, (state, action) => {
            const res = action.payload

            if (res && res.data.EC === 0) {
                state.isAuthenticated = true
            } else {
                state.errorLogin = res.data.EM;
                toast.error(res.data.EM)

            }
            state.loadingLogin = false
        })
    }
})

export default authSlice.reducer
