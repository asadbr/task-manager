<template>
  <div class="container px-6 py-6 mx-auto">
    <h1 class="font-medium text-2xl py-4">Аналитика</h1>
    <div class="grid grid-cols-1 md:grid-cols-4 gap-x-4">
      <div class="col-span-1 rounded-lg shadow p-4">
        <p class="font-medium text-gray-500">Нужно сделать</p>
        <p class="text-xl">
          {{ tasksToDoCount }}
        </p>
      </div>
      <div class="col-span-1 rounded-lg shadow-sm p-4">
        <p class="font-medium text-gray-500">В процессе</p>
        <p class="text-xl">
          {{ tasksInProgressCount }}
        </p>
      </div>
      <div class="col-span-1 rounded-lg shadow-sm p-4">
        <p class="font-medium text-gray-500">На проверке</p>
        <p class="text-xl">
          {{ tasksInReviewCount }}
        </p>
      </div>
      <div class="col-span-1 rounded-lg shadow-sm p-4">
        <p class="font-medium text-gray-500">Готово</p>
        <p class="text-xl">
          {{ tasksCompletedCount }}
        </p>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useTasksStore } from "@/store/tasksStore";
import { computed } from "vue";

const { tasks } = useTasksStore();

const tasksToDoCount = computed<number>(() => {
  return tasks.filter((task) => task.status === "toDo").length;
});

const tasksInProgressCount = computed<number>(() => {
  return tasks.filter((task) => task.status === "inProgress").length;
});

const tasksInReviewCount = computed<number>(() => {
  return tasks.filter((task) => task.status === "inReview").length;
});

const tasksCompletedCount = computed<number>(() => {
  return tasks.filter((task) => task.status === "completed").length;
});
</script>
