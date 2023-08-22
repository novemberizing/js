
export default class NovemberizingHttp {
    static async get(url) {
        const response = await fetch(url);

        return await response.json();
    }

    static async json(url, body) {
        const response = await fetch(url, {
            method: 'GET',
            body: JSON.stringify(body)
        });

        return await response.json();
    }
}
