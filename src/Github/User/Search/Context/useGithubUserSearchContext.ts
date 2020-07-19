import { useContext } from 'react';
import GithubUserSearchContext from '.';

export default function useGithubUserSearchContext() {
    return useContext(GithubUserSearchContext);
}
