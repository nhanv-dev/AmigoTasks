import { HttpRequest } from "@util/HttpRequest";
import { SignInType, User } from "./types";


class AuthService {

    public async signIn(signInType: SignInType) {
        return HttpRequest.post<User>('/auth/sign-in', signInType);
    }

    public async signUp(signUpType: any) {
        return HttpRequest.put<any>(`/auth/sign-up`, signUpType);
    }

    public async signOut(id: string) {
        return HttpRequest.post<void>(`/auth/${id}`, {});
    }
}

const authService = new AuthService();

export default authService; 