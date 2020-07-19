import React from 'react';
import './index.css';
import useGithubUserSearchContext from '../Context/useGithubUserSearchContext';

export default function GithubUserSearchResults() {
    const { error, hasError, results } = useGithubUserSearchContext();

    function computeResults() {
        if (hasError) {
            return error.message;
        }

        return JSON.stringify(results, null, 4);
    }

    return (
        <div className="github-user-search-results">
            <pre>
                <code>{computeResults()}</code>
            </pre>
        </div>
    );
}
