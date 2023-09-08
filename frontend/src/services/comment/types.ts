import { User } from '@services/user/types';
import { Base } from '../_common/type';


export type Comment = Base & {
    content: string;
    author: User;
}


export type CreateComment = {
    content: string
}

export type UpdateComment = {
    id: string;
    content: string;
}

export type DeleteComment = {
    id: string;
}
