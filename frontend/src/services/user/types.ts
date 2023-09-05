import { Base } from "@services/_common/type"

export type User = Base & {
    name: string,
    username: string,
    password: string,
    avatar: string,
    background: string,
    provider: string,
}
