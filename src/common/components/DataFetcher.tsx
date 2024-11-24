import React from 'react';
import useFetch from '../hooks/useFetch.tsx';
import books from "../books/books.json";

interface User {
    id: number;
    name: string;
    username: string;
}

interface Posts {
    id: number;
    title: string;
}

const DataFetcher: React.FC = () => {
    // let {data: users, loading, error} = useFetch<User[]>('https://jsonplaceholder.typicode.com/users');
    // if (loading) return <p>Lädt Daten...</p>;
    // if (error) return <p>Fehler: {error}</p>;
    let {data: posts, loading, error } = useFetch<Posts[]>('https://jsonplaceholder.typicode.com/posts');
    if (loading) return <p>Lädt Daten...</p>;
    if (error) return <p>Fehler: {error}</p>;
    posts = posts.slice(0, 10);
    return (
        <div>
            {/*<h2>Benutzerliste</h2>*/}
            {/*<ul>*/}
            {/*    {users?.map(user => (*/}
            {/*        <li key={user.id}>{user.name} ({user.username})</li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
            <h2>Postsliste</h2>
            <ul>
                {posts?.slice(0, 3).map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
};

export default DataFetcher;
