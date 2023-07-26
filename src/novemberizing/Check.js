import _ from "lodash";

export default class NovemberizingCheck {
    /**
     * Validate email
     * 
     * @param   {String} s  string
     * @returns {Boolean} validated result if string pattern is email, return true, otherwise return false.
     * @example `console.log(NovemberizingCheck.check("novemberizing.gmail.com"));`
     */
    static email(s) {
        s = _.trim(s);
        const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        return pattern.test(s);
    }
}