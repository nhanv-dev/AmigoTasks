import { HttpRequest } from "@util/HttpRequest";
import { Comment, CreateComment, UpdateComment } from "./types";

class CommentService {

    // ─── Topic Comment ──────────────────────────────────────────────────────────────────────

    public async addCommentTopic(topicId: string, createComment: CreateComment) {
        return HttpRequest.post<Comment>(`/topics/${topicId}/comments`, createComment);
    }

    public async editCommentTopic(topicId: string, commentId: string, updateComment: UpdateComment) {
        return HttpRequest.put<Comment>(`/topics/${topicId}/comments/${commentId}`, updateComment);
    }

    public async removeCommentTopic(topicId: string, commentId: string) {
        return HttpRequest.delete<void>(`/topics/${topicId}/comments/${commentId}`);
    }

}

const commentService = new CommentService();
export default commentService; 