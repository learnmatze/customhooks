import { useState, useEffect } from 'react';

function useDebounce<T>(value: T, delay: number): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);
    useEffect(() => {
        // Set up a timer to update the debounced value after the delay
        const handler = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);
        // Cleanup function to clear the timeout if the value changes before the delay
        return () => {
            clearTimeout(handler);
        };
    }, [value, delay]); // Re-run the effect if value or delay changes
    return debouncedValue;
}
export default useDebounce;