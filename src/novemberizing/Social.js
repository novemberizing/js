import NovemberizingSocialFacebook from "./social/Facebook.js";
import NovemberizingSocialTwitter from "./social/Twitter.js";

export default class NovemberizingSocial {
    static #facebook = NovemberizingSocialFacebook;
    static #twitter = NovemberizingSocialTwitter;

    static get facebook(){ return NovemberizingSocial.#facebook; }
    static get twitter(){ return NovemberizingSocial.#twitter; }
}
