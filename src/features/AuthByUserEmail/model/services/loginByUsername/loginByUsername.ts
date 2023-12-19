import { createAsyncThunk } from "@reduxjs/toolkit";
import { User, userActions } from "entities/User";
import { ThunkConfig } from 'app/providers/StoreProvider';

interface LoginByUsernameProps {
    username: string;
    email: string;
    password: string;
}

export const loginByUsername: any = createAsyncThunk<User, LoginByUsernameProps, ThunkConfig<string>>(
    'login/loginByUsername',
    async (authData, thunkAPI) => {
        const {extra, rejectWithValue, dispatch} = thunkAPI;

        try {
            const response = await extra.api.post<User>("/auth/registration", authData );

            if (!response.data) {
                throw new Error();
            }

            const user: User = {
                _id: response.data._id,
                username: response.data.username,
                email: response.data.email,
                token: response.data.token
            }
            localStorage.setItem('token', JSON.stringify(user.token))
            dispatch(userActions.setAuthData(user));

            extra.navigate('/about')

            return response.data
        } catch (error) {
            return rejectWithValue('Помилка при авторизації. Перевірте пошту або пароль')
        }
    }
)