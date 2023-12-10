import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateScheme";
import { userReducer } from 'entities/User';

export function createReduxStore(initialState?: StateSchema) {
    const rootReducers: ReducersMapObject<StateSchema> = {
         user: userReducer,
    }

    return (configureStore<StateSchema>({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        // preloaderState: initialState
    })
)}

