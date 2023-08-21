
export default class NovemberizingSocialTwitter {
    static share(url, text = undefined) {
        const parameters = new URLSearchParams();
        parameters.append("url", url);
        if(text) parameters.append("text", text);
        window.open(`https://twitter.com/share?${parameters.toString()}`);
    }        
}