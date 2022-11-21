import { defineStore } from "pinia";
interface TaskDetail {
	id: Number,
	title: String,
	isFav: Boolean
}
interface TaskStore {
	tasks: TaskDetail[],
	isLoading: Boolean
}
export const useTaskStore = defineStore('TaskStore', {
	state: (): TaskStore => {
		return {
			tasks: [],
			isLoading: false
		}
	},

	getters: {
		favoriteTask: (state) => state.tasks.filter((t: any) => t.isFav),
		countFavorite: (state) => state.tasks.reduce((p: number, c: any) => c.isFav ? p + 1 : p, 0),
		countTotal: (state) => state.tasks.length
	},

	actions: {
		async getTasks() {
			this.isLoading = true

			const data = await fetch('http://localhost:3000/tasks')
				.then(response => response.json())
				.catch(error => {
					console.error('Error Fetching Tasks:', error)
			})

			this.tasks = data

			this.isLoading = false
		},
		async deleteTask(id: Number) {
			this.tasks = this.tasks.filter(d => d.id !== id)

			const res = await fetch('http://localhost:3000/tasks' + '/' + id,{
				method: 'DELETE'
			}).catch(error => {
				console.error('Error Deleting Task:', error);
			})
		},
		async addFavorite(id: Number) {
			const task = this.tasks.find(t => t.id === id)
			if (task != undefined) {
				task.isFav = !task.isFav
			}

			const res = await fetch('http://localhost:3000/tasks' + '/' + id,{
				headers: {'Content-Type': 'application/json'},
				method: 'PATCH',
				body: JSON.stringify({isFav: task?.isFav})
			}).catch(error => {
				console.error('Error Updating Task:', error);
			})
		},
		async addTask(task: TaskDetail) {
			this.tasks.push(task)

			const res = await fetch('http://localhost:3000/tasks',{
				headers: {'Content-Type': 'application/json'},
				method: 'POST',
				body: JSON.stringify(task)
			}).catch(error => {
				console.error('Error Adding Task:', error);
			})
		}
	}
})