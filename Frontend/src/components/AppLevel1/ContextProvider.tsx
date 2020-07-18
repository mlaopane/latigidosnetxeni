import React, { PropsWithChildren } from 'react';
import AppLevel1Context, { Checkbox } from './context';
import useAppLevel1ContextValue from './useAppLevel1ContextValue';

interface Props {
    checkboxes: Checkbox[];
}

export default function AppLevel1ContextProvider({
    checkboxes,
    children,
}: PropsWithChildren<Props>) {
    return (
        <AppLevel1Context.Provider
            value={useAppLevel1ContextValue({ initialCheckboxes: checkboxes })}
        >
            {children}
        </AppLevel1Context.Provider>
    );
}
