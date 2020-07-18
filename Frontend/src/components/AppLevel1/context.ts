import { createContext } from 'react';

export interface Checkbox {
    checked: boolean;
    name: string;
}

export interface AppLevel1ContextValue {
    allCheckboxesAreChecked: boolean;
    checkboxes: Checkbox[];
    getCheckbox: ({ name }: { name: string }) => Checkbox;
    setCheckbox: ({ name, checked }: Checkbox) => void;
    toggleAllCheckboxes: () => void;
}

function createInitialCheckbox(): Checkbox {
    return {
        checked: false,
        name: '',
    };
}

function createInitialContextValue(): AppLevel1ContextValue {
    return {
        allCheckboxesAreChecked: false,
        checkboxes: [],
        getCheckbox() {
            return createInitialCheckbox();
        },
        setCheckbox() {},
        toggleAllCheckboxes() {},
    };
}

const AppLevel1Context = createContext<AppLevel1ContextValue>(
    createInitialContextValue()
);
export default AppLevel1Context;
