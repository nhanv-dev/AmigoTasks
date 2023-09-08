
import { createAsyncThunk } from "@reduxjs/toolkit";
import commentService from "@services/comment/comment.service";
import { Comment } from "@services/comment/types";
import topicService from "@services/topic/topic.service";
import { CreateTopic, CreateTopicComment, DeleteTopicComment, DetailTopic, Topic, TopicFolder, TopicStatus, UpdateTopic, UpdateTopicComment } from "@services/topic/types";


export const TopicThunks = {
    create: createAsyncThunk<DetailTopic, CreateTopic>("topic/create", async (createTopic) => {
        return await topicService.create(createTopic);
    }),

    update: createAsyncThunk<DetailTopic, UpdateTopic>("topic/update", async (updateTopic) => {
        return await topicService.update(updateTopic);
    }),

    delete: createAsyncThunk<void, string>("topic/delete", async (id) => {
        return await topicService.delete(id);
    }),

    getAll: createAsyncThunk<Topic[], void>("topic/get-all", async () => {
        return await topicService.getAll();
    }),

    getByStatus: createAsyncThunk<Topic[], TopicStatus>("topic/get-by-status", async (status) => {
        return await topicService.getByConditions({ status });
    }),

    getByConditions: createAsyncThunk<Topic[], { status?: TopicStatus, parent?: string }>("topic/get-by-conditions", async ({ status, parent }) => {
        return await topicService.getByConditions({ status, parent });
    }),

    getByParent: createAsyncThunk<TopicFolder[], string>("topic/get-by-parent", async (parent) => {
        return await topicService.getByParent(parent);
    }),

    getByRoot: createAsyncThunk<TopicFolder[], void>("topic/get-by-root", async () => {
        return await topicService.getByRoot();
    }),

    getById: createAsyncThunk<DetailTopic, string>("topic/get-by-id", async (id) => {
        return await topicService.getById(id);
    }),

    // ─── Topic Comment ─────────────────────────────────────────────────────────────

    addComment: createAsyncThunk<Comment, CreateTopicComment>("topic/comment/create", async (createTopicComment) => {
        return await commentService.addCommentTopic(createTopicComment.topicId, createTopicComment);
    }),

    editComment: createAsyncThunk<Comment, UpdateTopicComment>("topic/comment/update", async (updateTopicComment) => {
        return await commentService.editCommentTopic(updateTopicComment.topicId, updateTopicComment.id, updateTopicComment);
    }),

    deleteComment: createAsyncThunk<void, DeleteTopicComment>("topic/comment/delete", async (deleteTopicComment) => {
        return await commentService.removeCommentTopic(deleteTopicComment.topicId, deleteTopicComment.id);
    }),
}