<script lang="ts">
import { defineComponent } from "@vue/runtime-core";
import { RouterView } from "vue-router";
import TaskList from "@/components/TaskList.vue";
export default defineComponent({
  components: { RouterView, TaskList }
})
</script>

<template>
  <!-- <main>
    <TaskList />
  </main> -->
  <RouterView />
</template>
