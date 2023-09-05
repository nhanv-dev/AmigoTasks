import { createAsyncThunk } from "@reduxjs/toolkit";
import authService from "@services/auth/auth.service";
import { SignInResponse, SignInType, SignUpType } from "@services/auth/types";
import { User } from "@services/user/types";

export const AuthThunks = {
  signIn: createAsyncThunk<SignInResponse, SignInType>("auth/sign-in", async (signIn) => {
    return await authService.signIn(signIn);
  }),

  signUp: createAsyncThunk<User, SignUpType>("auth/sign-up", async (signUp) => {
    return await authService.signUp(signUp);
  }),

  signOut: createAsyncThunk<void, string>("auth/sign-out", async (id) => {
    return await authService.signOut(id);
  }),
}