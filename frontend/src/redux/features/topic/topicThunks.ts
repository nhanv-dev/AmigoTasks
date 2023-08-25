
import { createAsyncThunk } from "@reduxjs/toolkit";
import topicService from "@services/topic/topic.service";
import { CreateTopic, DetailTopic, Topic, TopicStatus, UpdateTopic } from "@services/topic/types";


export const TopicThunks = {
    create: createAsyncThunk<Topic, CreateTopic>("topic/create", async (createTopic) => {
        return await topicService.create(createTopic);
    }),

    update: createAsyncThunk<Topic, UpdateTopic>("topic/update", async (updateTopic) => {
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

    getByParent: createAsyncThunk<Topic[], string>("topic/get-by-parent", async (parent) => {
        return await topicService.getByParent(parent);
    }),

    getByRoot: createAsyncThunk<Topic[], void>("topic/get-by-root", async () => {
        return await topicService.getByRoot();
    }),

    getById: createAsyncThunk<DetailTopic, string>("topic/get-by-id", async (id) => {
        return await topicService.getById(id);
    }),
}