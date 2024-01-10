import { createSlice } from '@reduxjs/toolkit';
import {Profile } from '../types/profile';

const initialState: Profile= {
    readonly: true,
    isLoading: false,
    error:undefined,
    banned: false,
    banReason: '',
    roles: [],
    posts: [],
    avatar: '',
    first: '',
    lastname: '',
    age: '',
    // currency?: Currency;
    // country?: Country;
    city: 'Kharkiv',
    username: '',
};

export const profileSlice = createSlice({
    name: 'profile',
    initialState,
    reducers: {},
});

// Action creators are generated for each case reducer function
export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;