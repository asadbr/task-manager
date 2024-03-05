<template>
  <div>
    <NavBar />
  </div>
  <div class="flex flex-col">
    <router-view />
  </div>
</template>

<script lang="ts" setup>
import { defineAsyncComponent } from "vue";
import { useTasksStore } from "@/store/tasksStore";

const NavBar = defineAsyncComponent(
  () => import("@/components/core/NavBar.vue")
);

const { getTasks } = useTasksStore();

getTasks();
</script>
