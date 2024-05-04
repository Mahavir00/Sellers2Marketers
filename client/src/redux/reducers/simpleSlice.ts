import { createSlice } from "@reduxjs/toolkit";

/**
 * Slice interface to store a single object
 * @param name name of the slice
 * @param initialState initial state of the slice
 */
export const simpleSlice = <T>(name: string, initialState: T) =>
    createSlice({
        name,
        initialState,
        reducers: {
            // eslint-disable-next-line lines-around-comment
            /**
             * Action to set the value for the slice implementing simpleSlice
             * @param _ state of the slice
             * @param root0 payload received by the action
             * @param root0.type action type
             * @param root0.payload action payload
             */
            set: (_, { payload }: { type: string; payload: T }) => payload,
        },
    });
