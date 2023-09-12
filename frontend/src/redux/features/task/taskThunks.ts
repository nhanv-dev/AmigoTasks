import { createAsyncThunk } from "@reduxjs/toolkit";
import taskListService from "@services/task/task-list.service";
import taskService from "@services/task/task.service";
import { CreateTask, CreateTaskList, Task, TaskList, UpdateTask, UpdateTaskList } from "@services/task/types";

export const TaskThunks = {

  // ─── Task List ─────────────────────────────────────────────────────────────

  createTaskList: createAsyncThunk<TaskList, CreateTaskList>("task-list/create", async (createTaskList) => {
    return await taskListService.createTaskList(createTaskList)
  }),

  updateTaskList: createAsyncThunk<TaskList, UpdateTaskList>("task-list/update", async (updateTaskList) => {
    return await taskListService.updateTaskList(updateTaskList)
  }),

  deleteTaskList: createAsyncThunk<void, string>("task-list/delete", async (id) => {
    return await taskListService.deleteTaskList(id)
  }),

  getTaskListsByWorkspaceId: createAsyncThunk<TaskList[], string>("task-list/workspace", async (id) => {
    return await taskListService.getTaskListsByWorkspaceId(id)
  }),

  // ─── Task ─────────────────────────────────────────────────────────────

  createTask: createAsyncThunk<Task, CreateTask>("task/create", async (createTask) => {
    return await taskService.create(createTask);
  }),

  updateTask: createAsyncThunk<Task, UpdateTask>("task/update", async (updateTask) => {
    return await taskService.update(updateTask);
  }),

  deleteTask: createAsyncThunk<void, string>("task/delete", async (id) => {
    return await taskService.delete(id);
  }),

  getAllTasks: createAsyncThunk<Task[], void>("task/get-all", async () => {
    return taskService.getAll();
  }),

  getTaskById: createAsyncThunk<Task, string>("task/get-by-id", async (id) => {
    return await taskService.getById(id);
  }),

  getTasksByTaskListId: createAsyncThunk<Task[], string>("task/get-by-workspace", async (id) => {
    return taskService.getByTaskListId(id);
  }),
}