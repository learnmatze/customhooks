import React from 'react';
import useTheme from './hooks/useTheme';

const ThemeButton: React.FC = () => {
    const { theme, toggleTheme } = useTheme();
    return (
        <button
            onClick={toggleTheme}
            style={{
                background: theme === 'light' ? '#fff' : '#333',
                color: theme === 'light' ? '#000' : '#fff',
            }}
        >
            Toggle to {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
    );
};
export default ThemeButton;