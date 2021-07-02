//Hook
import { useRef, useCallback } from 'react'

export default function useDebounce(callback, delay) {
    const timer = useRef()
    const debouncedCallback = useCallback((...args) => {
        if (timer.current) {
            clearTimeout(timer.current)
        }

        timer.current = setTimeout(() => {
            callback(...args)
        }, delay)
    }, [callback, delay])

    return debouncedCallback;
}

//Usage

import React, { useState } from 'react'
import useDebounce from './hooks/useDebounce'

function App() {
  const [value, setValue] = useState('');
  const debouncedSearch = useDebounce(search, 500)
  function search(query) {
    fetch(`https://jsonplaceholder.typicode.com/todos?query=${query}`)
      .then(response => response.json())
      .then(json => console.log(json))
  }

  function onChange(e) {
    setValue(e.target.value);
    debouncedSearch(e.target.value);
  }
  return (
    <>
      <input value={value} onChange={onChange} type="text" />
    </>
  );
}

export default App;
