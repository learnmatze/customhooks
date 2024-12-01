import React from 'react';
import useFetch from '../hooks/useFetch.tsx';

interface User {
    id: number;
    name: string;
    username: string;
}

interface Post {
    id: number;
    title: string;
    body: string;
}

const DataFetcher: React.FC = () => {
    let {data } = useFetch('https://jsonplaceholder.typicode.com/posts');
    // let {data, loading, error } = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts');
    // if (loading) return <p>Lädt Daten...</p>;
    // if (error) return <p>Fehler: {error}</p>;
    return (
        <div>
            <h2>Posts-Liste</h2>
            <ul>
                {data?.slice(0, 5).map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default DataFetcher;
