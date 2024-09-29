import { createAsyncThunk } from "@reduxjs/toolkit";
import { get, post } from '../../utils/apis'

export const login = createAsyncThunk('user/login',
    async (data) => {
        const response = await post('/login', data)

        return response
    }
)

export const register = createAsyncThunk('user/register',
    async (data) => {
        const response = await post('/register', data)

        return response
    }
)