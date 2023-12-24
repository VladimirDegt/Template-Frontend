import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RegisterSchema } from '../types/registerSchema';
import { registerUser } from '../services/registerUser/registerUser';

const initialState: RegisterSchema = {
    username: '',
    email: '',
    password: '',
    isLoading: false
};

export const registerSlice = createSlice({
    name: 'register',
    initialState,
    reducers: {
        setUserName: (state, action: PayloadAction<string>) => {
            state.username = action.payload
        },
        setUserEmail: (state, action: PayloadAction<string>) => {
            state.email = action.payload
        },
        setUserPassword: (state, action: PayloadAction<string>) => {
            state.password = action.payload
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(registerUser.pending, (state) => {
                state.error = undefined;
                state.isLoading = true;
            })
            .addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
            })
            .addCase(registerUser.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            })
    }
});

// Action creators are generated for each case reducer function
export const { actions: registerActions } = registerSlice;
export const { reducer: registerReducer } = registerSlice;