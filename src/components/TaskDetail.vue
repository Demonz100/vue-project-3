<template>
    <div class="task">
        <h3>{{ taskDetail.title }}</h3>
        <div class="icons">
            <i class="material-icons" @click="taskStore.deleteTask(taskDetail.id)">
                delete
            </i>
            <i class="material-icons" :class="{active: taskDetail.isFav}" @click="taskStore.addFavorite(taskDetail.id)">
                favorite
            </i>
        </div>
    </div>
</template>

<script lang="ts">
import { useTaskStore } from '@/stores/TaskStore';
import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'TaskDetail',
    props: {
        task: {}
    },
    setup(props) {
        const taskDetail = ref<any>(props.task)

        const taskStore = useTaskStore()

        return { taskDetail, taskStore }
    }
})
</script>

<style scoped>
    .active{
        color: red;
    }
</style>