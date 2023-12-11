import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { User } from "entities/User";

interface LoginByUsernameProps {
    username: string;
    email: string;
    password: string;
}

export const loginByUsername: any = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>("http://localhost:5000/users", authData );

            if (!response.data) {
                throw new Error();
            }

            return response.data
        } catch (error) {
            console.log(error);
            return thunkAPI.rejectWithValue('error in thunk')
        }
    }
)