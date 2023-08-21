
export default class NovemberizingCookie {
    static get(id) {
        const found = document.cookie.split(";").find(item => item.trim().startsWith(`${id}=`));
        if(found) {
            return found.split("=")[1];
        }
        return null;
    }
}