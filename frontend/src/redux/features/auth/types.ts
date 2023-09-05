import { Task } from "@services/task/types";

export type UserState = {}

export type AuthState = {
    user: UserState | null;
    loading: boolean;
    isSignedInSuccess: boolean;
    isSignedInFail: boolean;
}