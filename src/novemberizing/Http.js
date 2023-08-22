
export default class NovemberizingHttp {
    static async get(url) {
        const response = await fetch(url);

        return await response.json();
    }

    static async json(url, body) {
        const response = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        });

        return await response.json();
    }
}
