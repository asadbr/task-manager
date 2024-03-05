import { defineStore } from "pinia";
import { TTask } from "@/types/tasks";
import { employeesService } from "@/services/tasks-service";

type TState = {
  tasks: TTask[];
  loading: boolean;
};
type TActions = {
  getTasks: () => void;
};

type TGetters = {
  tasksToDo: (state: TState) => TTask[];
  tasksInProgress: (state: TState) => TTask[];
  tasksInReview: (state: TState) => TTask[];
  tasksCompleted: (state: TState) => TTask[];
};

export const useTasksStore = defineStore<string, TState, TGetters, TActions>(
  "tasksStore",
  {
    state: () => ({
      tasks: [],
      loading: false,
    }),
    actions: {
      getTasks() {
        this.loading = true;
        employeesService
          .getTasksRequest()
          .then((res) => {
            this.tasks = res.data;
          })
          .finally(() => {
            this.loading = false;
          });
      },
    },
    getters: {
      tasksToDo: (state) => {
        return state.tasks.filter((task) => task.status === "toDo");
      },
      tasksInProgress: (state) => {
        return state.tasks.filter((task) => task.status === "inProgress");
      },
      tasksInReview: (state) => {
        return state.tasks.filter((task) => task.status === "inReview");
      },
      tasksCompleted: (state) => {
        return state.tasks.filter((task) => task.status === "completed");
      },
    },
  }
);
