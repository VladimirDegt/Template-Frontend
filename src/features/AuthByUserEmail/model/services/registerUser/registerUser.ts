import { createAsyncThunk } from '@reduxjs/toolkit';
import { User, userActions } from '@/entities/User';
import { ThunkConfig } from '@/app/providers/StoreProvider';

interface RegisterUserProps {
    username: string;
    email: string;
    password: string;
}

const LOCAL_TOKEN_NAME = 'token';

export const registerUser: any = createAsyncThunk<User, RegisterUserProps, ThunkConfig<string>>(
    'register/registerUser',
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
            localStorage.setItem(LOCAL_TOKEN_NAME, JSON.stringify(user.token))
            dispatch(userActions.setAuthData(user));

            extra.navigate('/about')

            return response.data
        } catch (error) {
            return rejectWithValue('Помилка при авторизації. Перевірте пошту або пароль')
        }
    }
)