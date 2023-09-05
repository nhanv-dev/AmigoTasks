import { createSelector } from "@reduxjs/toolkit";
import { AuthState } from "./types";

interface PartialAuthState {
    auth: AuthState;
}

const AuthStateSelector = (state: PartialAuthState) => state.auth;

export const AuthSelectors = {
    getUser: () => createSelector(AuthStateSelector, ({ user }) => user),

    getStatus: () => createSelector(AuthStateSelector, ({ loading, isSignedInSuccess }) => ({ loading, isSignedInSuccess })),
}