import React from 'react';
import AppContextProvider from './ContextProvider';
import Checkboxes from './Checkboxes';
import { Checkbox } from './context';

export default function App() {
    const checkboxes: Checkbox[] = [
        { label: 'Item 1', name: 'item-1', checked: false },
        { label: 'Item 2', name: 'item-2', checked: false },
        { label: 'Item 3', name: 'item-3', checked: false },
        { label: 'Item 4', name: 'item-4', checked: false },
    ];

    return (
        <div id="app-level-1">
            <AppContextProvider checkboxes={checkboxes}>
                <Checkboxes checkboxes={checkboxes} />
            </AppContextProvider>
        </div>
    );
}
