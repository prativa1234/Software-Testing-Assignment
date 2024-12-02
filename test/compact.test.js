const { expect } = require("chai");
const compact = require("../src/compact");

describe("compact.js", () => {
    it("should remove falsy values from array", () => {
        const input = [null, 'Snacks', undefined, 0, false, ""];
        const result = compact(input);
        expect(result).to.deep.equal(['Snacks']);
    });

    it("should handle arrays with no falsy values", () => {
        const input = ['Drinks', 'Vegan'];
        const result = compact(input);
        expect(result).to.deep.equal(['Drinks', 'Vegan']);
    });

    it("should return an empty array if input is empty", () => {
        const input = [];
        const result = compact(input);
        expect(result).to.deep.equal([]);
    });
});
