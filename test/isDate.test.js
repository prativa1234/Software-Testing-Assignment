const { expect } = require("chai");
const isDate = require("../src/isDate");

describe("isDate.js", () => {
    it("should return true for valid Date objects", () => {
        expect(isDate(new Date())).to.be.true;
    });

    it("should return false for invalid dates", () => {
        expect(isDate("2024-12-02")).to.be.false;
        expect(isDate(1234)).to.be.false;
        expect(isDate(null)).to.be.false;
    });

    it("should handle edge cases", () => {
        expect(isDate(new Date("invalid"))).to.be.false;
    });
});
