
export default class NovemberizingHttp {
    static async get(url) {
        const response = await fetch(url);

        return await response.json();
    }
}