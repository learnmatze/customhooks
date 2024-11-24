import { useState, useEffect } from 'react';
import axios from 'axios';

interface UseFetchResult<T> {
    data: T | null;
    loading: boolean;
    error: string | null;
}

const useFetchAxios = (url: string): UseFetchResult<T> => {
    const [data, setData] = useState<T | null>(null);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const response = await axios.get<T>(url);
                setData(response.data);
                setLoading(false);
            } catch (err: any) {
                setError(err.message || 'Fehler beim Abrufen der Daten');
                setLoading(false);
            }
        };

        fetchData();
    }, [url]);
    return { data, loading, error };
};

export default useFetchAxios;
