import { useState } from 'react';

function useLocalStorage<T>(key: string, initialValue: T): [T, (value: T) => void] {
    // Retrieve the initial value from localStorage or use the provided initial value
    const [storedValue, setStoredValue] = useState<T>(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.warn("Error reading localStorage key:", key, error);
            return initialValue;
        }
    });

    // Custom setter function that updates both the state and localStorage
    const setValue = (value: T) => {
        try {
            setStoredValue(value);
            window.localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
            console.warn("Error setting localStorage key:", key, error);
        }
    };
    return [storedValue, setValue];
}

export default useLocalStorage;