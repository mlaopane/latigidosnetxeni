import React, { PropsWithChildren } from 'react';
import GithubUserSearchContext from '.';
import useGithubUserSearchContextValue from './useGithubUserSearchContextValue';

export default function GithubUserSearchContextProvider({
    children,
}: PropsWithChildren<any>) {
    return (
        <GithubUserSearchContext.Provider
            value={useGithubUserSearchContextValue()}
        >
            {children}
        </GithubUserSearchContext.Provider>
    );
}
