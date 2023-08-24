
export default class NovemberizingDom {
    static inner(element) {
        if(typeof element === "string") element = document.getElementById(element);

        return element.innerHTML;
    }
}