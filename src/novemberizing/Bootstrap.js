import NovemberizingCheck from "./Check.js";
import NovemberizingStr from "./Str.js";

export default class NovemberizingBootstrap {

    static #validate(e) {
        const o = e.target;

        if(o.type === "email") {
            if(NovemberizingCheck.email(o.value)) {
                o.classList.replace("is-invalid", "is-valid");
            } else {
                o.classList.add("is-invalid");
            }
        } else {
            if(NovemberizingStr.trim(o.value)) {
                o.classList.replace("is-invalid", "is-valid");
            } else {
                o.classList.add("is-invalid");
            }
        }
    }
    static validatorReg(button, elements, func) {
        document.getElementById(button).addEventListener("click", async e => {
            if(!elements.find(element => {
                const o = document.getElementById(element);
                console.log(o);
                if(o.type === "email") {
                    if(NovemberizingCheck.email(o.value)) {
                        o.classList.replace("is-invalid", "is-valid");
                        return false;
                    }
                    o.classList.add("is-invalid");
                    o.addEventListener("keydown", NovemberizingBootstrap.#validate);
                    o.focus();
                    return true;
                } else {
                    if(NovemberizingStr.trim(o.value)) {
                        o.classList.replace("is-invalid", "is-valid");
                        return false;
                    }
                    o.classList.add("is-invalid");
                    o.addEventListener("keydown", NovemberizingBootstrap.#validate);
                    o.focus();
                    return true;
                }
            })) {
                if(func) {
                    await func(elements.reduce((accumulator, element) => {
                        const o = document.getElementById(element);
                        accumulator[o.name] = o.value;

                        return accumulator;
                    }, {}), e);
                }

                elements.forEach(element => {
                    const o = document.getElementById(element);
                    o.classList.remove("is-valid");
                    o.removeEventListener("keydown", NovemberizingBootstrap.#validate);
                    o.value = "";
                });
            }
        });
    }
}