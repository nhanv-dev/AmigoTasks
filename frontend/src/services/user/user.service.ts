import { HttpRequest } from "@util/HttpRequest";
import { User } from "./types";
import { QueryFormatter } from '@util/QueryFormatter';


class UserService {

    public async getById(id: string) {
        return HttpRequest.get<User>(`/users/${id}`);
    }

    public async getByEmail(email: string) {
        return HttpRequest.get<User>(`/users/email/${email}`);
    }

    public async getByUsername(username: string, provider?: string) {
        const queryString = QueryFormatter.format({ provider });
        return HttpRequest.get<User>(`/users/username/${username}?${queryString}`);
    }
}

const userService = new UserService();

export default userService; 