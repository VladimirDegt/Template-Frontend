import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateScheme";
import { userReducer } from 'entities/User';
import { loginReducer } from "features/AuthByUserEmail";
import { profileReducer } from 'entities/Profile';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        loginForm: loginReducer,
        profile: profileReducer,
    }

    return (configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        // preloaderState: initialState
    })
)}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];