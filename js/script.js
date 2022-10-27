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
            this.todoList.push({text:this.todoUser, done: false})
            this.todoUser = ""
        }
    }
}).mount("#app")