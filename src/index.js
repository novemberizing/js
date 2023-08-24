import NovemberizingUrl from "./novemberizing/Url.js";
import NovemberizingSocial from "./novemberizing/Social.js";
import NovemberizingCookie from "./novemberizing/Cookie.js";
import NovemberizingHttp from "./novemberizing/Http.js";
import NovemberizingDom from "./novemberizing/Dom.js";

const novemberizing = {
    url: NovemberizingUrl,
    social: NovemberizingSocial,
    cookie: NovemberizingCookie,
    http: NovemberizingHttp,
    dom: NovemberizingDom
};

window.novemberizing = novemberizing;

export default novemberizing;
