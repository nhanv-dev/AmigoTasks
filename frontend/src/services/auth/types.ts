import { Base } from "@services/_common/type"

export type User = Base & {
    username: string,
    password: string,
    fullName: string,
}

export type SignInType = {
    username: string,
    password: string,
}
