

export default class NovemberizingSocialFacebook {
    static share(url) {
        const parameters = new URLSearchParams();
        parameters.append("u", url);
        window.open(`https://www.facebook.com/sharer.php?${parameters.toString()}`);
    }
}