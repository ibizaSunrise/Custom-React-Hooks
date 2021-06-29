//Usage
import React from 'react'
import Button from './components/Button'
import useInput from './hooks/useInput';

function App() {
    const username = useInput('')
    const password = useInput('')

    return (
        <>
            <input {...username} type="text" placeholder='username' />
            <input {...password} type="password" placeholder='password' />

            <Button text='up' onClick={() => console.log(username.value, password.value)} />

        </>
    );
}

//Hook
import { useState } from 'react'

export default function useInput(initialValue) {
    const [value, setValue] = useState(initialValue)
    const onChange = e => {
        setValue(e.target.value)
    }
    return {
        value,
        onChange
    }
}
