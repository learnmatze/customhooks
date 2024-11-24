import React from 'react';
import useLocalStorage from './hooks/useLocalStorage';

const LocalStorage: React.FC = () => {
    const [theme, setTheme] = useLocalStorage<string>('theme', 'light');

    const toggleTheme = () => {
        setTheme(theme === 'light' ? 'dark' : 'light');
    };

    return (
        <div style={{ background: theme === 'light' ? '#fff' : '#333', color: theme === 'light' ? '#000' : '#fff', padding: '20px' }}>
            <h1>{`Current Theme: ${theme}`}</h1>
            <button onClick={toggleTheme}>
                Toggle Theme
            </button>
        </div>
    );
};

export default LocalStorage;