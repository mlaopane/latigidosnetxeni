import { createContext } from 'react';

export interface Checkbox {
    checked: boolean;
    label: string;
    name: string;
}

export interface AppContextValue {
    allCheckboxesAreChecked: boolean;
    checkboxes: Checkbox[];
    getCheckbox: ({ name }: { name: string }) => Checkbox;
    setCheckbox: ({ name, checked }: Checkbox) => void;
    toggleAllCheckboxes: () => void;
}

function createInitialCheckbox(): Checkbox {
    return {
        checked: false,
        label: '',
        name: '',
    };
}

function createInitialContextValue(): AppContextValue {
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

const AppContext = createContext<AppContextValue>(createInitialContextValue());
export default AppContext;
