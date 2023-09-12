import { HttpRequest } from "@util/HttpRequest";
import { CreateTaskList, TaskList, UpdateTaskList } from "./types";


class TaskListService {

    // ─── Task List ─────────────────────────────────────────────────────────────────────

    public async createTaskList(createTaskList: CreateTaskList) {
        return HttpRequest.post<TaskList>('/task-lists', createTaskList);
    }

    public async updateTaskList(updateTaskList: UpdateTaskList) {
        return HttpRequest.put<TaskList>(`/task-lists/${updateTaskList.id}`, updateTaskList);
    }

    public async deleteTaskList(id: string) {
        return HttpRequest.delete<void>(`/task-lists/${id}`);
    }

    public async getTaskListsByWorkspaceId(id: string) {
        return HttpRequest.get<TaskList[]>(`/task-lists/workspaces/${id}`);
    }

}


const taskListService = new TaskListService();
export default taskListService; 