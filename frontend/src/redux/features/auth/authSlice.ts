import { createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./types";

const initialState: AuthState = {
    user: null,
    loading: false,
    isSignedInFail: false,
    isSignedInSuccess: false,
}

export const auth = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {

    },
    extraReducers: (builder) => {


    }
})

export const AuthActions = auth.actions;
