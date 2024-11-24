import { useEffect, useState } from 'react';

interface FetchOptions {
    method?: string;
    headers?: Record<string, string>;
    body?: string;
}

interface FetchResponse<T> {
    data: T | null;
    error: string | null;
    loading: boolean;
}

function useFetchAdvanced<T>(url: string, options?: FetchOptions, deps: any[] = []): FetchResponse<T> {
    const [data, setData] = useState<T | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        setLoading(true);
        setError(null);

        const fetchData = async () => {
            try {
                const response = await fetch(url, options);
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`);
                }
                const result: T = await response.json();
                setData(result);
            } catch (err: any) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [url, JSON.stringify(options), ...deps]); // Stringify options to ensure stable dependencies

    return { data, error, loading };
}

export default useFetchAdvanced;
