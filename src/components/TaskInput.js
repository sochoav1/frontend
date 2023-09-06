// src/components/TaskInput.js (actualización)

import React, { useState } from 'react';
import LabelSelector from './LabelSelector';
import PrioritySelector from './PrioritySelector';

function TaskInput({ onAddTask }) {
    const [title, setTitle] = useState('');
    const [label, setLabel] = useState('');
    const [priority, setPriority] = useState('Baja');
    const [dueDate, setDueDate] = useState('');
    const [reminder, setReminder] = useState(false);

    const handleSubmit = e => {
        e.preventDefault();
        if (title) {
            onAddTask({ title, label, priority, dueDate, reminder });
            setTitle('');
            setLabel('');
            setPriority('Baja');
            setDueDate('');
            setReminder(false);
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
            <div className="d-flex mb-2">
                <LabelSelector 
                    labels={['Trabajo', 'Personal', 'Urgente']}
                    selectedLabel={label}
                    onSelect={setLabel}
                />
                <PrioritySelector 
                    selectedPriority={priority}
                    onSelect={setPriority}
                />
            </div>
            <div className="d-flex mb-2">
                <input
                    type="date"
                    value={dueDate}
                    onChange={e => setDueDate(e.target.value)}
                    className="form-control me-2"
                />
                <div className="form-check">
                    <input
                        type="checkbox"
                        checked={reminder}
                        onChange={e => setReminder(e.target.checked)}
                        className="form-check-input"
                        id="reminderCheckbox"
                    />
                    <label className="form-check-label" htmlFor="reminderCheckbox">Recordatorio</label>
                </div>
            </div>
            <button type="submit" className="btn btn-primary">Añadir</button>
        </form>
    );
}

export default TaskInput;
