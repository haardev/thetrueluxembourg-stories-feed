import { useState, useEffect } from 'react';

const useFetch = (url = false) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(url);
                const result = await response.json();
                if (response.ok) {
                    setData(result);
                }
                else {
                    setHasError(true);
                    setErrorMessage(result);
                }
            }
            catch (err) {
                setHasError(true);
                setErrorMessage(err.message);

            }
            finally {
                setIsLoading(false);
            }
        };
        fetchData();
    }, []);
    return {
        data,
        isLoading,
        hasError,
        errorMessage
    };
};
export default useFetch;
