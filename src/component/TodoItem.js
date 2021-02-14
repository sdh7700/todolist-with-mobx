import React from 'react';

const TodoItem = ({ data }) => {
    return (
        <div>
            <input type="checkbox" onClick={data.toggle} />
            <span>{data.title}</span>
        </div>
    );
};

export default TodoItem;