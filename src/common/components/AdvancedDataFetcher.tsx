import React, { useState } from 'react';
import useFetchAdvanced from './hooks/useFetchAdvanced.tsx';

interface User {
    id: number;
    name: string;
    email: string;
}

const AdvancedDataFetcher: React.FC = () => {
    const [userId, setUserId] = useState<number>(1);

    // GET request example
    const { data: userData, loading: getLoading, error: getError } = useFetchAdvanced<User>(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        { method: 'GET' }
    );

    // POST request example
    const postOptions = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: 'New User', email: 'newuser@example.com' }),
    };
    const { data: postData, loading: postLoading, error: postError } = useFetchAdvanced<User>(
        'https://jsonplaceholder.typicode.com/users',
        postOptions,
        [postOptions]
    );

    // PUT request example
    const putOptions = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: 'Updated User', email: 'updateduser@example.com' }),
    };
    const { data: putData, loading: putLoading, error: putError } = useFetchAdvanced<User>(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        putOptions,
        [putOptions]
    );

    // DELETE request example
    const deleteOptions = {
        method: 'DELETE',
    };
    const { data: deleteData, loading: deleteLoading, error: deleteError } = useFetchAdvanced<null>(
        `https://jsonplaceholder.typicode.com/users/${userId}`,
        deleteOptions,
        [deleteOptions]
    );

    return (
        <div>
            <h2>API Requests Example</h2>

            <section>
                <h3>GET User</h3>
                {getLoading ? <p>Loading user data...</p> : getError ? <p>Error: {getError}</p> : <p>Name: {userData?.name}</p>}
            </section>

            <section>
                <h3>POST New User</h3>
                {postLoading ? (
                    <p>Creating new user...</p>
                ) : postError ? (
                    <p>Error: {postError}</p>
                ) : (
                    <p>New User Created: {postData?.name}</p>
                )}
            </section>

            <section>
                <h3>PUT Update User</h3>
                {putLoading ? (
                    <p>Updating user...</p>
                ) : putError ? (
                    <p>Error: {putError}</p>
                ) : (
                    <p>User Updated: {putData?.name}</p>
                )}
            </section>

            <section>
                <h3>DELETE User</h3>
                {deleteLoading ? (
                    <p>Deleting user...</p>
                ) : deleteError ? (
                    <p>Error: {deleteError}</p>
                ) : (
                    <p>User Deleted Successfully</p>
                )}
            </section>
        </div>
    );
};

export default AdvancedDataFetcher;
