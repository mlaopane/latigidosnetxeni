import React from 'react';
import { Checkbox } from './context';
import ItemCheckbox from './ItemCheckbox';
import SelectAllCheckboxes from './SelectAllCheckboxes';

interface Props {
    checkboxes: Checkbox[];
}

export default function Checkboxes({ checkboxes }: Props) {
    return (
        <div className="checkboxes">
            <SelectAllCheckboxes />
            {checkboxes.map((checkbox) => (
                <ItemCheckbox
                    key={checkbox.name}
                    label={checkbox.label}
                    name={checkbox.name}
                />
            ))}
        </div>
    );
}
