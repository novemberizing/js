
export default class NovemberizingUrl {
    static move(url) {
        location.href = url;
    }
    static open(url, target = undefined) {
        window.open(url, target);
    }
}