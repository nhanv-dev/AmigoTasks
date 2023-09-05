import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./types";
import { AuthThunks } from "./authThunks";
import { User } from "@services/user/types";

const initialState: AuthState = {
    user: null,
    loading: false,
    isSignedInSuccess: false,
}

export const auth = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        setUser(state, action: PayloadAction<User | null>) {
            state.user = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(AuthThunks.signIn.fulfilled, (state, action) => {
                state.user = action.payload.user;
                state.isSignedInSuccess = true;
            })
            .addCase(AuthThunks.signIn.rejected, (state, action) => {
                state.user = null;
                state.isSignedInSuccess = false;
            });

        builder
            .addCase(AuthThunks.signUp.fulfilled, (state, action) => {

            })
            .addCase(AuthThunks.signUp.rejected, (state, action) => {

            })

    }
})

export const AuthActions = auth.actions;
