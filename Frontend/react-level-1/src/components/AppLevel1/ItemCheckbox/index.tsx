import React from 'react';
import useItemCheckbox from './useItemCheckbox';

interface Props {
    label: string;
    name: string;
}

export default function ItemCheckbox({ label, name }: Props) {
    const { isChecked, toggleCheckbox } = useItemCheckbox({ name });
    const id = `app-level-1-${name}`;

    return (
        <div className="item-checkbox">
            <input
                type="checkbox"
                name={name}
                id={id}
                checked={isChecked()}
                onChange={toggleCheckbox}
            />{' '}
            <label htmlFor={id}>{label}</label>
        </div>
    );
}
