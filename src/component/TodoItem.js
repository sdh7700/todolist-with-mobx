import React from 'react';
import useStore from '../useStore';

const TodoItem = ({ data }) => {
    const { todo } = useStore();

    const removeItem = () => {
        todo.removeTodo(data.id);
    }

    return (
        <div>
            <input type="checkbox" />
            <span>{data.text}</span>
            <span onClick={removeItem}>❌</span>
        </div>
    );
};

export default TodoItem;