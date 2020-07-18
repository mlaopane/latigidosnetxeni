import React from 'react';
import AppLevel1ContextProvider from './ContextProvider';
import Checkboxes from './Checkboxes';
import { Checkbox } from './context';

export default function AppLevel1() {
    const checkboxes: Checkbox[] = [
        { name: 'item-1', checked: false },
        { name: 'item-2', checked: false },
        { name: 'item-3', checked: false },
        { name: 'item-4', checked: false },
    ];
    return (
        <div id="app-level-1">
            <AppLevel1ContextProvider checkboxes={checkboxes}>
                <Checkboxes />
            </AppLevel1ContextProvider>
        </div>
    );
}
