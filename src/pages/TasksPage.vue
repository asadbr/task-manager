<template>
  <div class="container px-6 py-6 mx-auto h-[90vh]">
    <div
      class="flex justify-between items-center w-full border-b border-gray-200 pb-4"
    >
      <h1 class="font-medium text-2xl py-4">Список задач</h1>
      <button
        class="bg-indigo-600 rounded py-2 px-3 hover:bg-indigo-500 font-bold border border-indigo-700 hover:border-indigo-600 text-white outline-none focus:outline-none ease-linear transition-all duration-150"
        @click="createModal = true"
      >
        Добавить
      </button>
    </div>
    <div class="h-full">
      <TasksBlock />
    </div>
  </div>
  <TaskCreateModal
    v-model="createModal"
    @update:modelValue="createModal = false"
  />
</template>
<script setup lang="ts">
import { ref } from "vue";
import TaskCreateModal from "@/components/tasks/TaskCreateModal.vue";
import TasksBlock from "@/components/tasks/TasksBlock.vue";

const createModal = ref(false);
</script>
