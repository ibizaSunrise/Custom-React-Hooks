//Usage (Hover.js)
import React, { useRef } from 'react'
import Button from './Button'
import useHover from '../hooks/useHover'

export default function Hover() {
    const ref = useRef()
    const isHovering = useHover(ref);
    console.log(isHovering)
    return (
        <div ref={ref} style={{ width: 300, height: 300, background: isHovering ? 'red' : 'green' }}>
            <Button text="up" onClick={() => console.log(ref.current)} />
        </div>
    )
}


// Hook (useHover.js)
import { useState, useEffect } from 'react'

export default function useHover(ref) {
    const [isHovering, setHovering] = useState(false);
    const on = () => setHovering(true);
    const off = () => setHovering(false);

    useEffect(() => {
        if (!ref.current) return
        const node = ref.current;
        node.addEventListener('mouseenter', on);
        node.addEventListener('mousemove', on);
        node.addEventListener('mouseleave', off);
        return function () {
            node.removeEventListener('mouseenter', on);
            node.removeEventListener('mousemove', on);
            node.removeEventListener('mouselive', off);
        }
    }, [])

    return isHovering
}