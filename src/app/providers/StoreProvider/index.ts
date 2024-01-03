import {createReduxStore, AppDispatch} from "./config/store";
import {StoreProvider} from "./ui/StoreProvider";
import type {StateSchema, ThunkConfig} from "./config/StateScheme"

export type {
    StateSchema,
    AppDispatch,
    ThunkConfig
}

export {
    createReduxStore,
    StoreProvider,
}