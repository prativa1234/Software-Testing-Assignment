const { expect } = require("chai");
const toNumber = require("../src/toNumber");

describe("toNumber.js", () => {
    it("should convert numeric strings to numbers", () => {
        expect(toNumber("1.8")).to.equal(1.8);
    });

    it("should return NaN for non-numeric strings", () => {
        expect(toNumber("abc")).to.be.NaN;
    });

    it("should return NaN for invalid numbers", () => {
        expect(toNumber("1,8")).to.be.NaN;
    });

    it("should return 0 for empty input", () => {
        expect(toNumber("")).to.equal(0);
    });
});
