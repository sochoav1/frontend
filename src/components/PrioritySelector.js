// src/components/PrioritySelector.js

import React from 'react';

function PrioritySelector({ selectedPriority, onSelect }) {
    return (
        <select
            value={selectedPriority}
            onChange={e => onSelect(e.target.value)}
            className="form-select"
        >
            <option value="Baja">Baja</option>
            <option value="Media">Media</option>
            <option value="Alta">Alta</option>
        </select>
    );
}

export default PrioritySelector;
