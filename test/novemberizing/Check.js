import assert from "assert";

import NovemberizingCheck from "../../src/novemberizing/Check.js";

describe("NovemberizingCheck", () => {
    it("Email", () => {
        assert.strictEqual(NovemberizingCheck.email("novemberizing@gmail.com"), true);
        assert.strictEqual(NovemberizingCheck.email("novemberizing@gmailcom"), false);
    });
});
