import { FormEvent } from 'react';
import fetchGithubUserResults from '../fetchGithubUserResults';
import useGithubUserSearchContext from '../Context/useGithubUserSearchContext';

export default function useInput() {
    const { setError, setResults } = useGithubUserSearchContext();

    async function handleChange({
        currentTarget,
    }: FormEvent<HTMLInputElement>) {
        try {
            const results = await fetchGithubUserResults({
                name: currentTarget.value,
            });
            setResults(results);
        } catch (error) {
            setError(error);
        }
    }

    return { handleChange };
}
