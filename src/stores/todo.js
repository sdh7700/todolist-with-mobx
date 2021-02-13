import { observable } from 'mobx';

export const todo = observable({
    todoData: [],
    currentId: 0,

    addTodo(text) {
        this.todoData.push({ id: this.currentId, text, checked: false });
        this.currentId++;
    },

    removeTodo(id) {
        const index = this.todoData.findIndex((v) => v.id === id);
        if (id !== -1) {
            this.todoData.splice(index, 1);
        }
    },
});


