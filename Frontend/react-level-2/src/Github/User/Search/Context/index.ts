import { createContext } from 'react';
import { Results } from '../../../../types';

interface ContextValue {
    error: { message: string };
    hasError: boolean;
    results: Results;
    setError: (error: { message: string }) => void;
    setResults: (results: Results) => void;
}
const GithubUserSearchContext = createContext<ContextValue>({
    error: { message: '' },
    hasError: false,
    results: [],
    setError() {},
    setResults() {},
});

export default GithubUserSearchContext;
