<template>
  <div>
    <div
      @click.self="closeModal"
      v-if="modelValue"
      class="overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none justify-center items-center flex"
    >
      <div class="relative min-w-96 w-auto my-6 mx-auto max-w-6xl">
        <div
          class="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none"
        >
          <div
            class="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t"
          >
            <h3 class="text-lg font-semibold">{{ title }}</h3>
          </div>
          <div class="relative p-6 flex-auto">
            <slot />
          </div>
          <div
            class="flex items-center justify-end p-4 gap-x-2 border-t border-solid border-blueGray-200 rounded-b"
          >
            <button
              class="py-2 px-3 text-sm border uppercase rounded border-gray-300 text-gray-700 bg-white hover:text-gray-500 set-2 focus:ring-gray-600 dark:focus:ring-offset-gray-900"
              type="button"
              @click="closeModal"
            >
              Закрыть
            </button>
            <button
              class="bg-indigo-600 text-sm rounded py-2 px-3 hover:bg-indigo-500 font-bold uppercase border border-indigo-700 text-white outline-none focus:outline-none ease-linear transition-all duration-150"
              type="button"
              @click="saveChanges"
            >
              Сохранить
            </button>
          </div>
        </div>
      </div>
    </div>
    <div v-if="modelValue" class="opacity-25 fixed inset-0 z-40 bg-black" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps, withDefaults, defineEmits } from "vue";

type TProps = {
  title: string;
  modelValue: boolean;
};

const emit = defineEmits<{
  (e: "saveChanges"): void;
  (e: "update:modelValue", value: boolean): void;
}>();

withDefaults(defineProps<TProps>(), {
  title: "Привет",
});

function saveChanges() {
  emit("saveChanges");
  closeModal();
}

function closeModal() {
  emit("update:modelValue", false);
}
</script>
