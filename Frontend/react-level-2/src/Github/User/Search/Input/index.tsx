import React from 'react';
import './index.css';
import useInput from './useInput';

export default function GithubUserSearchInput() {
    const { handleChange } = useInput();

    return (
        <input
            id="github-user-search-input"
            className="github-user-search-input"
            type="text"
            onChange={handleChange}
        />
    );
}
