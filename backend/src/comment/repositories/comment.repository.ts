import { Injectable } from '@nestjs/common';
import { BaseRepositoryAbstract } from 'src/common/repositories/base.abstract.repository';
 
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CommentRepositoryInterface } from '../interfaces/comment.interface';
import { Comment } from '../entities/comment.entity';


@Injectable()
export class CommentRepository extends BaseRepositoryAbstract<Comment> implements CommentRepositoryInterface {
    constructor(
        @InjectModel(Comment.name)
        private readonly CommentModel: Model<Comment>
    ) {
        super(CommentModel);
    }
}