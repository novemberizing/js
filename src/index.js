import NovemberizingUrl from "./novemberizing/Url.js";
import NovemberizingSocial from "./novemberizing/Social.js";
import NovemberizingCookie from "./novemberizing/Cookie.js";
import NovemberizingHttp from "./novemberizing/Http.js";

const novemberizing = {
    url: NovemberizingUrl,
    social: NovemberizingSocial,
    cookie: NovemberizingCookie,
    http: NovemberizingHttp
};

window.novemberizing = novemberizing;

export default novemberizing;
