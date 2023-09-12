import { HttpRequest } from "@util/HttpRequest";
import { CreateTask, Task, UpdateTask } from "./types";


class TaskService {

    public async create(createTask: CreateTask) {
        return HttpRequest.post<Task>('/tasks', createTask);
    }

    public async update(updateTask: UpdateTask) {
        return HttpRequest.put<Task>(`/tasks/${updateTask.id}`, updateTask);
    }

    public async delete(id: string) {
        return HttpRequest.delete<void>(`/tasks/${id}`);
    }

    public async getAll() {
        return HttpRequest.get<Task[]>('/tasks');
    }

    public async getByTaskListId(id: string) {
        return HttpRequest.get<Task[]>(`/tasks/task-lists/${id}`);
    }

    public async getById(id: string) {
        return HttpRequest.get<Task>(`/tasks/${id}`);
    }

}


const taskService = new TaskService();
export default taskService; 