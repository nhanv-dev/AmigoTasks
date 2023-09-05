import { HttpRequest } from "@util/HttpRequest";
import { User } from "./types";


class UserService {

    public async getById(id: string) {
        return HttpRequest.get<User>(`/users/${id}`);
    }

    public async getByEmail(email: string) {
        return HttpRequest.get<User>(`/users/email/${email}`);
    }

    public async getByUsername(username: string) {
        return HttpRequest.get<User>(`/users/username/${username}`);
    }
}

const userService = new UserService();

export default userService; 