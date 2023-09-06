// src/components/TaskInput.js (actualización)

import React, { useState } from 'react';
import LabelSelector from './LabelSelector';
import PrioritySelector from './PrioritySelector';

function TaskInput({ onAddTask }) {
    const [title, setTitle] = useState('');
    const [label, setLabel] = useState('');
    const [priority, setPriority] = useState('Baja');

    const handleSubmit = e => {
        e.preventDefault();
        if (title) {
            onAddTask({ title, label, priority });
            setTitle('');
            setLabel('');
            setPriority('Baja');
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mb-3">
            <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Añadir nueva tarea..."
                className="form-control mb-2"
            />
            <div className="d-flex">
                <LabelSelector
                    labels={['Trabajo', 'Personal', 'Urgente']}
                    selectedLabel={label}
                    onSelect={setLabel}
                />
                <PrioritySelector
                    selectedPriority={priority}
                    onSelect={setPriority}
                />
                <button type="submit" className="btn btn-primary ms-2">Añadir</button>
            </div>
        </form>
    );
}

export default TaskInput;
