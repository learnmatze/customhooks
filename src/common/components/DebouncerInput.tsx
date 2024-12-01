import React, { useState, useEffect } from 'react';
import useDebounce from '../hooks/useDebouncer.tsx';

const DebouncerInput: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const debouncedSearchTerm = useDebounce(searchTerm, 1500);
    // Simulate an API call whenever the debounced search term changes
    useEffect(() => {
        if (debouncedSearchTerm) {
            console.log(`Searching for "${debouncedSearchTerm}"...`);
            // Insert API call logic here (e.g., fetch data based on debouncedSearchTerm)
        }
    }, [debouncedSearchTerm]);

    return (
        <div>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <p>Searching for: {debouncedSearchTerm}</p>
        </div>
    );
};
export default DebouncerInput;