import { createSelector } from "@reduxjs/toolkit";
import { AuthState } from "./types";

interface PartialAuthState {
    auth: AuthState;
}

const AuthStateSelector = (state: PartialAuthState) => state.auth;

export const TaskSelectors = {
    getUser: () => createSelector(AuthStateSelector, ({ user }) => user),

    getStatus: () => createSelector(AuthStateSelector, ({ loading, isSignedInFail, isSignedInSuccess }) => ({ loading, isSignedInFail, isSignedInSuccess })),
}