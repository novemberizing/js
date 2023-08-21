import NovemberizingUrl from "./novemberizing/Url.js";
import NovemberizingSocial from "./novemberizing/Social.js";
import NovemberizingCookie from "./novemberizing/Cookie.js";

const novemberizing = {
    url: NovemberizingUrl,
    social: NovemberizingSocial,
    cookie: NovemberizingCookie
};

window.novemberizing = novemberizing;

export default novemberizing;
