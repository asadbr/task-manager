<template>
  <div class="py-4">
    <div class="grid grid-cols-4 gap-x-4">
      <p class="" v-for="status in statusOptions" :key="status.value">
        <span class="uppercase font-medium text-gray-500">
          {{ status.title }}
        </span>
      </p>
    </div>
    <div class="grid grid-cols-4 py-4 gap-x-4 h-full">
      <div class="space-y-3 overflow-y-auto">
        <div
          class="rounded shadow-sm p-4 border border-gray-100"
          v-for="task in tasksToDo"
          :key="task.id"
        >
          <TaskCard :task="task" />
        </div>
      </div>
      <div class="space-y-3 overflow-y-auto">
        <div
          class="rounded shadow-sm p-4 border border-gray-100"
          v-for="task in tasksInProgress"
          :key="task.id"
        >
          <TaskCard :task="task" />
        </div>
      </div>
      <div class="space-y-3 overflow-y-auto">
        <div
          class="rounded shadow-sm p-4 border border-gray-100"
          v-for="task in tasksInReview"
          :key="task.id"
        >
          <TaskCard :task="task" />
        </div>
      </div>
      <div class="space-y-3 overflow-y-auto">
        <div
          class="rounded shadow-sm p-4 border border-gray-100"
          v-for="task in tasksCompleted"
          :key="task.id"
        >
          <TaskCard :task="task" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useTasksStore } from "@/store/tasksStore";
import { statusOptions } from "@/utils/constants";
import TaskCard from "@/components/tasks/TaskCard.vue";
import { storeToRefs } from "pinia";

const { tasksToDo, tasksInProgress, tasksInReview, tasksCompleted } =
  storeToRefs(useTasksStore());
</script>
