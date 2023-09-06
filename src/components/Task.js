// src/components/Task.js (actualización)

import React from 'react';

function Task({ task, onToggleComplete, onDelete }) {
    return (
        <div className="d-flex justify-content-between align-items-center mb-2">
            <div>
                <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={onToggleComplete}
                />
                <span className={task.completed ? 'text-muted ms-2' : 'ms-2'}>{task.title}</span>
                {task.label && <span className="badge bg-secondary ms-2">{task.label}</span>}
                <span className="badge bg-primary ms-2">{task.priority}</span>
            </div>
            <button className="btn btn-danger btn-sm" onClick={onDelete}>Eliminar</button>
        </div>
    );
}

export default Task;
