import { HttpRequest } from "@util/HttpRequest";
import { SignInResponse, SignInType } from "./types";
import { User } from "@services/user/types";


class AuthService {

    public async signIn(signInType: SignInType) {
        return HttpRequest.post<SignInResponse>('/auth/sign-in', signInType);
    }

    public async signUp(signUpType: any) {
        return HttpRequest.post<any>(`/auth/sign-up`, signUpType);
    }

    public async signOut() {
        return HttpRequest.post<void>(`/auth/sign-out`, {});
    }

    public async getUser() {
        return HttpRequest.get<User>(`/auth/user`);
    }
}

const authService = new AuthService();

export default authService; 