import React, { useContext, useState } from 'react';
import { TodoContext } from '../App';

const TodoForm = () => {
    const todoStore = useContext(TodoContext);
    const [text, setText] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        todoStore.addTodo(text);
        setText('');
    };

    const onChange = e => {
        setText(e.target.value);
    };

    return (
        <form onSubmit={onSubmit}>
            <input type="text" onChange={onChange} value={text} placeholder="할 일을 입력하세요" />
            <button type="submit">입력</button>
        </form>
    );
};

export default TodoForm;