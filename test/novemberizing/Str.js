import assert from "assert";

import NovemberizingStr from "../../src/novemberizing/Str.js";

describe("NovemberizingStr", () => {
    it("trim", () => {
        assert.strictEqual(NovemberizingStr.trim("  hello world   "), "hello world");
    });
});
