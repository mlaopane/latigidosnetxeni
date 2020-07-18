import React from 'react';
import useAppLevel1Context from './useContext';

export default function SelectAllCheckboxes() {
    const {
        allCheckboxesAreChecked,
        toggleAllCheckboxes,
    } = useAppLevel1Context();

    function handleChange() {
        toggleAllCheckboxes();
    }

    return (
        <div className="select-all-checkboxes">
            <input
                type="checkbox"
                name="selectAll"
                id={`app-level-1-select-all`}
                checked={allCheckboxesAreChecked}
                onChange={handleChange}
            />
            <label htmlFor={name}>All</label>
        </div>
    );
}
