import { createReduxStore, AppDispatch } from "./config/store";
import { StoreProvider } from "./ui/StoreProvider";
import type {StateSchema, ThunkConfig } from "./config/StateScheme"

export {
    createReduxStore,
    StoreProvider,
    StateSchema,
    AppDispatch,
    ThunkConfig
}
