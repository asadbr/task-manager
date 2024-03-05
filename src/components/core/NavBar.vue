<template>
  <div class="bg-blue-950">
    <nav
      class="container px-6 py-6 mx-auto md:flex md:justify-between md:items-center"
    >
      <div class="flex items-center justify-between gap-x-2">
        <div class="flex gap-x-3 items-center">
          <img src="@/assets/images/img.png" alt="icon" class="h-10" />
          <h2 class="text-2xl text-white mb-0.5">Task Manager</h2>
        </div>
        <div @click="toggleNav" class="flex md:hidden">
          <button
            type="button"
            class="text-gray-100 hover:text-gray-400 focus:outline-none focus:text-gray-400"
          >
            <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
              <path
                fill-rule="evenodd"
                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
              />
            </svg>
          </button>
        </div>
      </div>
      <ul
        :class="showMenu ? 'flex' : 'hidden'"
        class="flex-col mt-8 space-y-4 md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0"
      >
        <RouterLink
          v-for="(item, index) in topBarItems"
          :key="index"
          :to="item.path"
          class="text-lg font-bold text-white md:text-xl hover:text-indigo-400"
          active-class="text-indigo-400"
          exact
        >
          {{ item.name }}
        </RouterLink>
      </ul>
    </nav>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";
import { TTopBarItem } from "@/types/global";

let showMenu = ref(false);
const topBarItems = ref<TTopBarItem[]>([
  {
    icon: "",
    name: "Главная",
    path: "/",
  },
  {
    icon: "",
    name: "Список задач",
    path: "/tasks",
  },
]);
const toggleNav = () => (showMenu.value = !showMenu.value);
</script>
