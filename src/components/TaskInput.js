// src/components/TaskInput.js

import React, { useState } from 'react';

function TaskInput({ onAddTask }) {
    const [title, setTitle] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        if (title) {
            onAddTask(title);
            setTitle('');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Añadir nueva tarea..."
                className="form-control"
            />
            <button type="submit" className="btn btn-primary mt-2">Añadir</button>
        </form>
    );
}

export default TaskInput;
