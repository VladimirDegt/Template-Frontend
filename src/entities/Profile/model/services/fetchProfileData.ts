import { createAsyncThunk } from "@reduxjs/toolkit";
import { ThunkConfig } from 'app/providers/StoreProvider';
import { Profile } from '../types/profile'

export const fetchProfileData: any = createAsyncThunk<Profile, void, ThunkConfig<string>>(
    'profile/fetchProfileData',
    async (_, thunkAPI) => {
        const {extra, rejectWithValue, } = thunkAPI;

        try {
            const response = await extra.api.get<Profile>("/users");

            return response.data
        } catch (error) {
            return rejectWithValue('Помилка при авторизації. Перевірте пошту або пароль')
        }
    }
)