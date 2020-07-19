import React, { PropsWithChildren } from 'react';
import AppContext, { Checkbox } from './context';
import useAppContextValue from './useAppContextValue';

interface Props {
    checkboxes: Checkbox[];
}

export default function AppContextProvider({
    checkboxes,
    children,
}: PropsWithChildren<Props>) {
    return (
        <AppContext.Provider
            value={useAppContextValue({ initialCheckboxes: checkboxes })}
        >
            {children}
        </AppContext.Provider>
    );
}
