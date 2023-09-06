// src/components/LabelSelector.js

import React from 'react';

function LabelSelector({ labels, selectedLabel, onSelect }) {
    return (
        <select
            value={selectedLabel}
            onChange={e => onSelect(e.target.value)}
            className="form-select me-2"
        >
            <option value="">Sin etiqueta</option>
            {labels.map(label => (
                <option key={label} value={label}>{label}</option>
            ))}
        </select>
    );
}

export default LabelSelector;
