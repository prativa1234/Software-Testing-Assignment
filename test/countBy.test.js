const { expect } = require("chai");
const countBy = require("../src/countBy");

describe("countBy.js", () => {
    it("should count objects by a specific key", () => {
        const input = [
            { user: 'barney', active: true },
            { user: 'betty', active: true },
            { user: 'fred', active: false }
        ];
        const result = countBy(input, "active");
        expect(result).to.deep.equal({ true: 2, false: 1 });
    });

    it("should handle empty arrays", () => {
        const input = [];
        const result = countBy(input, "active");
        expect(result).to.deep.equal({});
    });
});
