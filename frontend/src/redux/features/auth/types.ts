import { Task } from "@services/task/types";
import { User } from "@services/user/types";

export type UserState = User

export type AuthState = {
    user: UserState | null;
    loading: boolean;
    isSignedInSuccess: boolean;
}