import { apiService } from "./apiService";
import { TTask } from "@/types/tasks";

export const employeesService = {
  getTasksRequest() {
    return apiService.get("tasks");
  },
  getTaskRequest(id: string) {
    return apiService.get(`tasks/${id}`);
  },
  updateTaskRequest(id: string, params: TTask | Record<string, never>) {
    return apiService.put(`tasks/${id}`, params);
  },
  deleteTaskRequest(id: string) {
    return apiService.delete(`tasks/${id}`);
  },
  createTaskRequest(params: Record<string, number | string>) {
    return apiService.post(`tasks`, params);
  },
};
