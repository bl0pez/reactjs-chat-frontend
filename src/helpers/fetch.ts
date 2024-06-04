export const fetchSinToken = async (endpoint: string, data: object, method = 'GET') => {
    const url = `${import.meta.env.VITE_BACKEND_URL}/${endpoint}`;

    if (method === 'GET') {
        const response = await fetch(url);
        return await response.json();
    } else {
        const response = await fetch(url, {
            method,
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return await response.json();
    }
}