import React, { useState } from 'react';
import useStore from '../useStore';

const TodoForm = () => {
    const { todo } = useStore();
    const [text, setText] = useState('');

    const onSubmit = e => {
        e.preventDefault();
        todo.addTodo(text);
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