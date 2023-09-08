import { CommentRepository } from './../repositories/comment.repository';
import { Inject, Injectable } from '@nestjs/common';
import { BaseServiceAbstract } from 'src/module/common/base.abstract.service';
import { Comment } from '../entities/comment.entity';

@Injectable()
export class CommentService extends BaseServiceAbstract<Comment> {
    constructor(private readonly commentRepository: CommentRepository) {
        super(commentRepository)
    }

}
