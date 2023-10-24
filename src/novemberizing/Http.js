
export default class NovemberizingHttp {
    static async put(url, options = undefined) {
        const response = await fetch(url, Object.assign({
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            }
        }, options));
        
        if(response.ok) return await response.json();

        throw new Error();
    }
    
    static async get(url, options = undefined) {
        const response = await fetch(url, Object.assign({
            method: 'GET',
            headers: {
                "Content-Type": "application/json"
            }
        }, options));
        
        if(response.ok) return await response.json();

        throw new Error();
    }

    static async post(url, body, options) {
        const response = await fetch(url, Object.assign({
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        }, options));

        if(response.ok) return await response.json();

        throw new Error();
    }

    static async json(url, body, options) {
        const response = await fetch(url, Object.assign({
            method: 'POST',
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json"
            }
        }, options));

        if(response.ok) return await response.json();

        throw new Error();
    }
}
