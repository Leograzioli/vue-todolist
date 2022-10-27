const { createApp } = Vue;

createApp({
    data() {
        return {
            todoUser: "",
            todoList: []
        }
    },
    methods: {

        //add to-do imputed by user on to-so object list
        addTodo() {
            if (this.todoUser !== "")
            this.todoList.push({text:this.todoUser, done: false})
            this.todoUser = ""
        },

        //change the status of done key from the object inside todoList
        taskDone(index) {
           this.todoList[index].done = !this.todoList[index].done
        },
        
        //remove the object from todoList in the clicked item index
        cancelTask(index) {
            this.todoList.splice([index], 1)
        }
    }
}).mount("#app")