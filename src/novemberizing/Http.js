
export default class NovemberizingHttp {
    static async get(url, options = undefined) {
        const response = await fetch(url, options);

        return await response.json();
    }

    static async post(url, body, options) {
        const response = await fetch(url, Object.assign({
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        }, options));

        return await response.json();
    }

    static async json(url, body, options) {
        const response = await fetch(url, Object.assign({
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        }, options));

        return await response.json();
    }
}
