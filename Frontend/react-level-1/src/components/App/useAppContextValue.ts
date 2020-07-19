import { AppContextValue, Checkbox } from './context';
import { useState, useMemo } from 'react';

interface Props {
    initialCheckboxes: Checkbox[];
}

export default function useAppContextValue({
    initialCheckboxes,
}: Props): AppContextValue {
    const [checkboxes, setCheckboxes] = useState<Checkbox[]>(initialCheckboxes);

    const allCheckboxesAreChecked = useMemo(() => {
        return checkboxes.reduce(
            (allChecked, checkbox) => allChecked && checkbox.checked,
            true
        );
    }, [checkboxes]);

    function findCheckboxByName(name: string): Checkbox | undefined {
        return checkboxes.find((checkbox) => checkbox.name === name);
    }

    function findCheckboxIndexByName(name: string): number {
        return checkboxes.findIndex((checkbox) => checkbox.name === name);
    }

    function setCheckbox({ label, name, checked }: Checkbox): void {
        const checkboxIndex = findCheckboxIndexByName(name);

        if (-1 === checkboxIndex) {
            return;
        }

        setCheckboxes([
            ...checkboxes.slice(0, checkboxIndex),
            {
                checked,
                label,
                name,
            },
            ...checkboxes.slice(checkboxIndex + 1),
        ]);
    }

    function getCheckbox({ name }: { name: string }): Checkbox {
        const checkbox = findCheckboxByName(name);

        if (checkbox === undefined) {
            throw new Error(`Unknown checkbox: ${name}`);
        }

        return checkbox;
    }

    function checkAllCheckboxes() {
        setCheckboxes(
            checkboxes.map((checkbox) => ({ ...checkbox, checked: true }))
        );
    }

    function uncheckAllCheckboxes() {
        setCheckboxes(
            checkboxes.map((checkbox) => ({ ...checkbox, checked: false }))
        );
    }

    function toggleAllCheckboxes() {
        if (allCheckboxesAreChecked) {
            uncheckAllCheckboxes();
            return;
        }

        checkAllCheckboxes();
    }

    return {
        allCheckboxesAreChecked,
        checkboxes,
        getCheckbox,
        setCheckbox,
        toggleAllCheckboxes,
    };
}
