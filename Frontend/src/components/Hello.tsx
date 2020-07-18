import React from 'react';

interface Props {
    compiler: string;
    framework: string;
}

export default function Hello({ compiler, framework }: Props) {
    return <h1>Hello from {compiler} and {framework}</h1>;
}
