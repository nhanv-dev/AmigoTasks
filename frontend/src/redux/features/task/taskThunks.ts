import { createAsyncThunk } from "@reduxjs/toolkit";
import taskService from "@services/task/task.service";
import { CreateTask, Task, UpdateTask } from "@services/task/types";

export const TaskThunks = {
  create: createAsyncThunk<Task, CreateTask>("task/create", async (createTask) => {
    return await taskService.create(createTask);
  }),

  update: createAsyncThunk<Task, UpdateTask>("task/update", async (updateTask) => {
    return await taskService.update(updateTask);
  }),

  delete: createAsyncThunk<void, string>("task/delete", async (id) => {
    return await taskService.delete(id);
  }),

  getAll: createAsyncThunk<Task[], void>("task/get-all", async () => {
    return taskService.getAll();
  }),

  getById: createAsyncThunk<Task, string>("task/get-by-id", async (id) => {
    return await taskService.getById(id);
  }),

  getByWorkspaceId: createAsyncThunk<Task[], string>("task/get-by-workspace", async (id) => {
    return taskService.getByWorkspaceId(id);
  }),
}