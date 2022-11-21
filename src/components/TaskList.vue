<template>
    <div class="container">
        <div class="navigation">
            <h1>{{ $t('main.appTitle') }}</h1>
            <ul>
                <li @click="favorite = 'all'">{{ $t('main.all_task') }}</li>
                <li @click="favorite = 'fav'">{{ $t('main.fav_task') }}</li>
                |
                <li>
                    <router-link to="/home">Home</router-link>
                </li>
                <li>
                    <router-link to="/about">About</router-link>
                </li>
                <LanguageSwitcher />
            </ul>
        </div>
        <TaskInput />
        <div v-if="favorite == 'all'">
            <h3>{{ $t('main.total') }}: {{ countTotal }}</h3>
            <!-- Loading -->
            <div class="isLoading" v-if="isLoading">
                Loading Tasks...
            </div>
            <div v-for="task in tasks" :key="`task-${task.id}`">
                <TaskDetail :task="task" />
            </div>
        </div>

        <div v-if="favorite == 'fav'">
            <h3>{{ $t('main.total') }}: {{ countFavorite }}</h3>
            <!-- Loading -->
            <div class="isLoading" v-if="isLoading">
                Loading Tasks...
            </div>

            <div v-for="task in favoriteTask" :key="`task-${task.id}`">
                <TaskDetail :task="task" />
            </div>
        </div>

    </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import { useTaskStore } from "@/stores/TaskStore";
import TaskDetail from "@/components/TaskDetail.vue";
import TaskInput from "@/components/TaskInput.vue";
import LanguageSwitcher from "@/components/LanguageSwitcher.vue";
import { storeToRefs } from "pinia";

export default defineComponent({
    name: 'TaskList',
    components: { TaskDetail, TaskInput, LanguageSwitcher },

    setup() {
        let taskStore = useTaskStore()

        let favorite = ref('all')

        const { countTotal, isLoading, tasks, countFavorite, favoriteTask } = storeToRefs(taskStore)

        taskStore.getTasks()

        return { tasks, favorite, countTotal, isLoading, countFavorite, favoriteTask }
    }
})

</script>

<style>
.container {
    max-width: 980px;
    margin: auto;
}

.navigation {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.navigation ul {
    display: flex;
}

.navigation ul li {
    list-style-type: none;
    margin: 0 0.5rem;
    cursor: pointer
}

.isLoading {
    max-width: 640px;
    border: 1px solid #ffd859;
    background: #ffe9a0;
    color: #3a3a3a;
    padding: 5px 0;
    text-align: center;
    margin: 30px auto;
}

a{
    text-decoration: none;
    color: inherit;
}
</style>