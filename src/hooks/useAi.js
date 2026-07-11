import { useState, useCallback } from 'react';
import { apiFetch } from '../utils/DB_utilities';

function useAi(endpoint) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendMessage = async (messageText) => {
        setLoading(true);
        setError(null);
        try {
            const responseData = await apiFetch(endpoint, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ message: messageText }),
            });
            setData(responseData);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    };

    const resetAI = useCallback(() => {
        setData(null);
        setError(null);
    }, []);

    return { sendMessage, data, loading, error, resetAI };
}

export default useAi;