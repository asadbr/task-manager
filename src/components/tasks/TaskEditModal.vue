<template>
  <BaseModal
    title="Изменение задач"
    :modelValue="modelValue"
    @update:modelValue="emit('update:modelValue', false)"
    @saveChanges="editTask"
  >
    <template #default>
      <div class="grid grid-cols-1 gap-4">
        <div class="flex flex-col gap-1">
          <label for="title" class="font-normal text-gray-700">
            Заголовок
          </label>
          <input
            type="text"
            id="title"
            class="px-3 py-1.5 border border-gray-400 rounded focus:border-indigo-300"
            v-model="query.title"
          />
        </div>
        <div class="flex flex-col gap-1">
          <label for="description" class="font-normal text-gray-700">
            Описание
          </label>
          <textarea
            type="text"
            id="description"
            class="px-3 py-1.5 border border-gray-400 rounded focus:border-indigo-300"
            v-model="query.description"
          />
        </div>
        <div class="flex gap-x-3 w-full">
          <div class="flex flex-col gap-1 w-full">
            <label for="editPriority" class="font-normal text-gray-700">
              Статус
            </label>
            <select
              id="editPriority"
              class="px-3 py-1.5 border border-gray-400 rounded focus:border-indigo-300 w-full"
              v-model="query.status"
            >
              <option
                :value="option.value"
                v-for="(option, index) in statusOptions"
                :key="index"
              >
                {{ option.title }}
              </option>
            </select>
          </div>
          <div class="flex flex-col gap-1 w-full">
            <label for="editPriority" class="font-normal text-gray-700">
              Приоритет
            </label>
            <select
              id="editPriority"
              class="px-3 py-1.5 border border-gray-400 rounded focus:border-indigo-300 w-full"
              v-model="query.priority"
            >
              <option
                :value="option.value"
                v-for="(option, index) in priorityOptions"
                :key="index"
              >
                {{ option.title }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </template>
  </BaseModal>
</template>

<script setup lang="ts">
import {
  defineAsyncComponent,
  defineEmits,
  defineProps,
  ref,
  watch,
} from "vue";
import { priorityOptions, statusOptions } from "@/utils/constants";
import { TTask } from "@/types/tasks";
import { useTasksStore } from "@/store/tasksStore";
import { employeesService } from "@/services/tasks-service";

type TProps = {
  modelValue: boolean;
  task: TTask;
};
const tasksStore = useTasksStore();

const props = defineProps<TProps>();
const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const query = ref<TTask | Record<string, never>>({});

watch(
  () => props.task.id,
  () => {
    query.value = { ...props.task };
  },
  { immediate: true, deep: true }
);

function editTask() {
  employeesService.updateTaskRequest(props.task.id, query.value).then(() => {
    tasksStore.getTasks();
  });
}

const BaseModal = defineAsyncComponent(
  () => import("@/components/core/BaseModal.vue")
);
</script>
