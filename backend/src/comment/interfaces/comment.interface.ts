import { BaseRepositoryInterface } from "src/common/interfaces/base.interface.repository";
import { Comment } from "../entities/comment.entity";

export interface CommentRepositoryInterface extends BaseRepositoryInterface<Comment> { }
