import React, { useContext } from 'react';
import { useObserver } from 'mobx-react';
import TodoItem from './TodoItem';
import { TodoContext } from '../App';

const TodoList = () => {
    const todoStore = useContext(TodoContext);

    return useObserver(() => (
        <>
            <section>
                {todoStore.todos.map(todo => (
                    <TodoItem data={todo} key={todo.id} />
                ))}
            </section>
            &nbsp;
            <div>Tasks Left: {todoStore.unfinishedTodoCount}</div>
        </>
    ))
};

export default TodoList;