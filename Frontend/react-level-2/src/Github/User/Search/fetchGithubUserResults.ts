class RequestError extends Error {}

export default async function fetchGithubUser({ name }: { name: string }) {
    try {
        const response = await fetch(
            `https://api.github.com/search/users?q=${name}`
        );
        const body = await response.json();

        if (!response.ok) {
            console.error(body);
            throw new RequestError(body.message);
        }

        return body;
    } catch (error) {
        if (error instanceof RequestError) {
            throw error;
        }

        throw new Error(
            `Cannot retrieve github user. Please check your internet connection.`
        );
    }
}
