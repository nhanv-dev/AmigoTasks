import { Injectable } from '@nestjs/common';
import { BaseServiceAbstract } from 'src/common/base.abstract.service';
import { Comment } from '../entities/comment.entity';

@Injectable()
export class CommentService extends BaseServiceAbstract<Comment> {

}
