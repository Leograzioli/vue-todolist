const { createApp } = Vue;

createApp({
    data() {
        return {
            todoUser: "",
            todoList: []
        }
    },
    methods: {
        addTodo() {
            if (this.todoUser !== "")
            this.todoList.push({text:this.todoUser, done: false})
            this.todoUser = ""
        },
        taskDone(index) {
           this.todoList[index].done = !this.todoList[index].done
        },
        
        cancelTask(index) {
            this.todoList.splice([index], 1)
        }
    }
}).mount("#app")