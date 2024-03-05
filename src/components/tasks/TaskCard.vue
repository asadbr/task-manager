<template>
  <div>
    <div class="flex justify-between items-center mb-2">
      <p class="text-gray-800 font-medium text-lg">
        {{ task.title }}
      </p>
      <div class="flex gap-x-2">
        <img
          src="@/assets/images/edit.png"
          alt="delete"
          class="h-7 w-7 cursor-pointer hover:shadow rounded p-0.5"
          @click="showEditModal = true"
        />
        <img
          src="@/assets/images/delete.png"
          alt="delete"
          class="h-7 w-7 cursor-pointer hover:shadow rounded p-0.5"
          @click="showDeleteModal = true"
        />
      </div>
    </div>
    <p class="text-gray-600 line-clamp-3 text-ellipsis mb-3">
      {{ task.description }}
    </p>
    <p
      class="text-gray-400 font-medium flex gap-x-2 items-center justify-between"
    >
      <span class="space-x-1">
        {{ readableDate(task.createdAt) }}
        {{ readableTime(task.createdAt) }}
      </span>
      <img
        v-if="task.priority === 'low'"
        src="@/assets/images/low.png"
        class="h-5 w-5"
        alt="priority"
      />
      <img
        v-if="task.priority === 'medium'"
        src="@/assets/images/medium.png"
        class="h-5 w-5"
        alt="priority"
      />
      <img
        v-if="task.priority === 'high'"
        src="@/assets/images/high.png"
        class="h-5 w-5"
        alt="priority"
      />
    </p>
    <BaseModal
      v-model="showDeleteModal"
      title="Удаление задач"
      @saveChanges="deleteTask"
    >
      <p class="text-xl text-gray-500">Вы точно хотите удалить?</p>
    </BaseModal>
    <TaskEditModal
      :task="task"
      :modelValue="showEditModal"
      @update:modelValue="showEditModal = false"
    />
  </div>
</template>

<script setup lang="ts">
import { readableDate, readableTime } from "@/utils/filters";
import { TTask } from "@/types/tasks";
import { defineProps, ref } from "vue";
import BaseModal from "@/components/core/BaseModal.vue";
import { useTasksStore } from "@/store/tasksStore";
import TaskEditModal from "@/components/tasks/TaskEditModal.vue";
import { employeesService } from "@/services/tasks-service";

type TProps = {
  task: TTask;
};
const props = defineProps<TProps>();
const taskStore = useTasksStore();

const showDeleteModal = ref(false);
const showEditModal = ref(false);

function deleteTask() {
  employeesService.deleteTaskRequest(props.task.id).then(() => {
    taskStore.getTasks();
  });
}
</script>
