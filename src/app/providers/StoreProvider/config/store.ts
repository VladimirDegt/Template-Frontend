import { configureStore, ReducersMapObject } from "@reduxjs/toolkit";
import { StateSchema } from "./StateScheme";
import { userReducer } from '@/entities/User';
import { loginReducer, registerReducer } from "@/features/AuthByUserEmail";
import { profileReducer } from '@/entities/Profile';
import { $api } from '@/shared/api/api';
import type { To } from '@remix-run/router';
import type { NavigateOptions } from 'react-router/dist/lib/context';

export function createReduxStore(
    initialState?: StateSchema,
    navigate?: (to: To, options?: NavigateOptions) => void,
) {
    const rootReducers: ReducersMapObject<StateSchema> = {
        user: userReducer,
        //@ts-ignore
        registerForm: registerReducer,
        //@ts-ignore
        loginForm: loginReducer,
        //@ts-ignore
        profile: profileReducer,
    }

    return (configureStore({
        reducer: rootReducers,
        devTools: __IS_DEV__,
        // щоб не експортувати $api у кожний thunk
        middleware: getDefaultMiddleware => getDefaultMiddleware({
            thunk: {
                extraArgument: {
                    api: $api,
                    navigate,
                }
            }
        })
        // preloaderState: initialState
        })
    )
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];