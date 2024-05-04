import { configureStore, Middleware } from "@reduxjs/toolkit";
import { reducer } from "../reducers";

/**
 * Services to be injected to actions.
 */
export interface Services {
    // Add services here
}

/**
 * Redux middleware to handle when error is thrown in an async thunk which dispatches a rejected action.
 * @param param0.dispatch Gives dispatch and getState functions
 * @param param0.dispatch.dispatch Redux dispatch function
 * @returns Redux Middleware to be ran on every dispatched action
 */
export const handleRejectedActions: Middleware = () => (next) => (action) => {
    next(action);
    if (action.type.endsWith("/rejected")) {
        console.error(action.error);
    }
};

/**
 * Creates redux store with merged reducers, preloaded state and services to be injected to actions.
 * @param services service to be injected to actions
 */
export const createStore = (services: Services) =>
    configureStore({
        reducer,

        /** @inheritdoc */
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware({
                serializableCheck: false, // To repress non-serializable warnings on dates, functions, etc.
                thunk: {
                    extraArgument: services,
                },
            }).concat(handleRejectedActions),
    });

export type AppStore = ReturnType<typeof createStore>;
export type GetState = AppStore["getState"];
export type AppDispatch = AppStore["dispatch"];
export type RootState = ReturnType<GetState>;
export type ThunkAPI = { extra: Services; state: RootState };

