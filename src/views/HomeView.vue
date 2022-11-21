<template>
  <main>
    <TaskList />
  </main>
</template>

<script lang="ts">
import TaskList from "@/components/TaskList.vue";
import { defineComponent } from "@vue/runtime-core";

export default defineComponent({
  name: "HomeView",
  components: { TaskList }
})
</script>
