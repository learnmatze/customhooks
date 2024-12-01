import { useState, useEffect } from 'react'

const useFetch = (url: string) => {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Fehler: ${response.status}`);
                }
                const result = await response.json();
                setData(result);
        };
        fetchData();
    }, [url]);
    return { data };
};

// interface UseFetchResult<T> {
//     data: T | null;
//     loading: boolean;
//     error: string | null;
// }
//
// const useFetch = <T>(url: string): UseFetchResult<T> => {
//     const [data, setData] = useState<T | null>(null);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);
//
//     useEffect(() => {
//         const fetchData = async () => {
//             setLoading(true);
//             try {
//                 const response = await fetch(url);
//                 if (!response.ok) {
//                     throw new Error(`Fehler: ${response.status}`);
//                 }
//                 const result: T = await response.json();
//                 setData(result);
//             } catch (err: any) {
//                 setError(err.message || 'Fehler beim Abrufen der Daten');
//             } finally {
//                 setLoading(false);
//             }
//         };
//         fetchData();
//     }, [url]);
//     return { data, loading, error };
// };
//
// export default useFetch;