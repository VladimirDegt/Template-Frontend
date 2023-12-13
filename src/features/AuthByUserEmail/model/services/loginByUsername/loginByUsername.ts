import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios';
import { User, userActions } from "entities/User";

interface LoginByUsernameProps {
    username: string;
    email: string;
    password: string;
}

export const loginByUsername: any = createAsyncThunk<User, LoginByUsernameProps, { rejectValue: string }>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        try {
            const response = await axios.post<User>("http://localhost:5000/auth/registration", authData );

            if (!response.data) {
                throw new Error();
            }

            const user: User = {
                _id: response.data._id,
                username: response.data.username,
                email: response.data.email,
                token: response.data.token
            }
            localStorage.setItem('token', JSON.stringify(user))
            thunkAPI.dispatch(userActions.setAuthData(user));

            return response.data
        } catch (error) {
            return thunkAPI.rejectWithValue('Помилка при авторизації. Перевірте пошту або пароль')
        }
    }
)