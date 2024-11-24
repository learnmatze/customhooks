import React from 'react';
import useToggle from './hooks/useToggle.tsx';

const ToggleExample: React.FC = () => {
    const [isVisible, toggleVisibility] = useToggle();

    return (
        <div>
            <button onClick={toggleVisibility}>
                {isVisible ? 'Verstecken' : 'Anzeigen'}
            </button>
            {isVisible && <p>Dies ist ein toggelbarer Text!</p>}
        </div>
    );
};

export default ToggleExample;
