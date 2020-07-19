import React from 'react';
import ItemCheckbox from './ItemCheckbox';
import SelectAllCheckboxes from './SelectAllCheckboxes';

export default function Checkboxes() {
    return (
        <div className="checkboxes">
            <SelectAllCheckboxes />
            <ItemCheckbox label="Item 1" name="item-1" />
            <ItemCheckbox label="Item 2" name="item-2" />
            <ItemCheckbox label="Item 3" name="item-3" />
            <ItemCheckbox label="Item 4" name="item-4" />
        </div>
    );
}
