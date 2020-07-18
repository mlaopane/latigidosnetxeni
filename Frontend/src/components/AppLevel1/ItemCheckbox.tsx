import React from 'react';
import useAppLevel1Context from './useContext';

interface Props {
    label: string;
    name: string;
}

export default function ItemCheckbox({ label, name }: Props) {
    const context = useAppLevel1Context();

    function isChecked({ name }: { name: string }) {
        try {
            return context.getCheckbox({ name }).checked;
        } catch (error) {
            console.error(error);
            return false;
        }
    }

    function toggleCheckbox({ target }: any) {
        context.setCheckbox({
            name,
            checked: target.checked,
        });
    }

    return (
        <div className="item-checkbox">
            <input
                type="checkbox"
                name={name}
                id={`app-level-1-${name}`}
                checked={isChecked({ name })}
                onChange={toggleCheckbox}
            />{' '}
            <label htmlFor={name}>{label}</label>
        </div>
    );
}
