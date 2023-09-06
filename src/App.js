// src/App.js

import React, { useState } from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

function App() {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'Ejemplo de tarea 1', completed: false },
        { id: 2, title: 'Ejemplo de tarea 2', completed: false },
    ]);

    const handleToggleTask = id => {
        const updatedTasks = tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        );
        setTasks(updatedTasks);
    };

    const handleDeleteTask = id => {
        const updatedTasks = tasks.filter(task => task.id !== id);
        setTasks(updatedTasks);
    };

// src/App.js (actualización en la función handleAddTask)

// src/App.js (actualización en la función handleAddTask)

const handleAddTask = taskData => {
    const newTask = {
        id: Date.now(),
        completed: false,
        ...taskData
    };
    setTasks([...tasks, newTask]);
};



    return (
        <div className="container mt-4">
            <h1>Gestor de Tareas</h1>
            <TaskInput onAddTask={handleAddTask} />
            <TaskList
                tasks={tasks}
                onToggleTask={handleToggleTask}
                onDeleteTask={handleDeleteTask}
            />
        </div>
    );
}

export default App;
