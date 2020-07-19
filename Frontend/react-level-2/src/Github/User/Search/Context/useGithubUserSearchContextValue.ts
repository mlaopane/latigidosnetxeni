import { useState, useMemo } from 'react';
import { Results } from '../../../../types';

export default function useGithubUserSearchContextValue() {
    const [error, setError] = useState({ message: '' });
    const [results, setResults] = useState<Results>({});
    const hasError = useMemo(() => error.message.length > 0, [error]);

    return {
        error,
        hasError,
        results,
        setError,
        setResults,
    };
}
