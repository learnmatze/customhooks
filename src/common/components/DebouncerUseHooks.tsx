// npm i @uidotdev/usehooks
import React, { useState, useEffect } from 'react';
import { useDebounce } from "@uidotdev/usehooks";
import axios from 'axios';

const DebouncerUseHook: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState<string>('');
    const [results, setResults] = React.useState([]);
    const debouncedSearchTerm = useDebounce(searchTerm, 1500);
    // Simulate an API call whenever the debounced search term changes
    useEffect(() => {
        const searchHN = async () => {
            let results = [];
            if (debouncedSearchTerm) {
                const data = await axios('https://hn.algolia.com/api/v1/search?query=' + debouncedSearchTerm);
                // const data = await searchHackerNews(debouncedSearchTerm);
                console.log(data.data.hits);
                results = data.data.hits;
            }
            setResults(results);
        };

        searchHN();
    }, [debouncedSearchTerm]);

    return (
        <div>
            <div><h3>Debouncer Hook</h3></div>
            <input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <p>Searching for with <a href="https://usehooks.com" >useHooks</a>: {debouncedSearchTerm}</p>
            {results.slice(0, 5).map((item) => (
                <p><a href={item.url}>{item.title}</a></p>
            ))}
        </div>
    );
};
export default DebouncerUseHook;