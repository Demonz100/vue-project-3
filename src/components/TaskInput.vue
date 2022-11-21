<template>
	<div class="list-input">
		<form @submit.prevent="handleSubmit">
			<input type="text" :placeholder="$t('main.add_task')" v-model="newTask" />
		</form>
	</div>
</template>

<script lang="ts">
import { defineComponent, ref } from "@vue/runtime-core";
import { useTaskStore } from "@/stores/TaskStore"

export default defineComponent({
	name: 'TaskInput',

	setup() {
		const newTask = ref<string>('')
		const taskStore = useTaskStore()

		const handleSubmit = () => {
			taskStore.addTask({
				id: Math.floor(Math.random() * 10000),
				title: newTask.value,
				isFav: false
			})
			newTask.value = ''
		}
		
		return { handleSubmit, newTask }
	}

})
</script>

<style>
.list-input input {
	border: #ccc;
	padding: 1rem;
	width: 50%;
	border-radius: 4px;
	box-shadow: 2px 4px 6px rgba(0, 0, 0, 0.05);
}
</style>