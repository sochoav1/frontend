// src/components/TaskList.js

import React from 'react';
import Task from './Task';

function TaskList({ tasks, onToggleTask, onDeleteTask }) {
    return (
        <div>
            {tasks.map(task => (
                <Task
                    key={task.id}
                    task={task}
                    onToggleComplete={() => onToggleTask(task.id)}
                    onDelete={() => onDeleteTask(task.id)}
                />
            ))}
        </div>
    );
}

export default TaskList;
