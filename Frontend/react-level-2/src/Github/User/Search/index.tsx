import React from 'react';
import './index.css';
import GithubUserSearchContextProvider from './Context/Provider';
import GithubUserSearchInput from './Input';
import GithubUserSearchLabel from './Label';
import GithubUserSearchResults from './Results';

export default function GithubUserSearch() {
    return (
        <div className="github-user-search">
            <GithubUserSearchContextProvider>
                <GithubUserSearchLabel />
                <GithubUserSearchInput />
                <GithubUserSearchResults />
            </GithubUserSearchContextProvider>
        </div>
    );
}
