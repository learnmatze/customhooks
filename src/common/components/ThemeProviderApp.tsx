import React from 'react';
import { ThemeProvider } from './ThemeProvider';
import ThemeButton from './ThemeButton';

const ThemeProviderApp: React.FC = () => (
    <ThemeProvider>
        <div>
            <h1>Welcome to the Theme App</h1>
            <ThemeButton />
            <ThemeButton />
        </div>
    </ThemeProvider>
);
export default ThemeProviderApp;