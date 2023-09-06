import { User } from "@services/user/types"

export type SignInType = {
    username: string,
    password: string | null,
    provider: string | null,
}

export type SignInResponse = {
    user: User,
    accessToken: string,
}

export type SignUpType = {
    username: string,
    name: string,
    password: string | null,
    provider: string | null
    avatar: string | null,
}