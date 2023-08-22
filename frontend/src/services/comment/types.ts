import { BaseWithoutId } from '../_common/type';


export type Comment = BaseWithoutId & {
    content: string;
}


export type CreateComment = {}

export type UpdateComment = {}

export type DeleteComment = {}