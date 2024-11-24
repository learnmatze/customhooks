import React, { useState } from 'react';

const ToggleComponent: React.FC = () => {
    const [isToggled, setIsToggled] = useState<boolean>(false);

    const toggle = () => {
        setIsToggled((prevValue) => !prevValue);
    };

    return (
        <div>
            <p>The toggle is {isToggled ? 'ON' : 'OFF'}</p>
            <button onClick={toggle}>Toggle</button>
        </div>
    );
};

export default ToggleComponent;
