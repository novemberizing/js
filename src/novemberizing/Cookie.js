
export default class NovemberizingCookie {
    static get(key) {
        const found = document.cookie.split(";").find(item => item.trim().startsWith(`${key}=`));
        if(found) {
            return found.split("=")[1];
        }
        return null;
    }
    static set(key, value) {
        document.cookie = `${key}=${value}; max-age=${60*60*24*365}; SameSite=lax;`;
    }

    static del(key) {
        document.cookie = `${key}=; Max-Age=0`;
    }
}