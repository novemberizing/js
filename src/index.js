import NovemberizingBootstrap from "./novemberizing/Bootstrap.js";
import NovemberizingCheck from "./novemberizing/Check.js";
import NovemberizingStr from "./novemberizing/Str.js";

export default class Novemberizing {
    static get bootstrap(){ return NovemberizingBootstrap; }
    static get check(){ return NovemberizingCheck; }
    static get str(){ return NovemberizingStr; }
}
