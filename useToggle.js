//Hook
import { useCallback, useState } from 'react';

export default function useToggle(initialState = false) {

    const [state, setState] = useState(initialState);

    const toggle = useCallback(() => setState(state => !state), []);

    return [state, toggle]
}

//Usage
import React from 'react'
import useToggle from './hooks/useToggle'


function App() {
    const [isTextChanged, setIsTextChanged] = useToggle();
    return (
        <>
            <button className="h-8 w-3/4 border border-red-500" onClick={setIsTextChanged}>{isTextChanged ? 'Toggled' : 'Click to Toggle'}</button>
        </>
    );
}

export default App;