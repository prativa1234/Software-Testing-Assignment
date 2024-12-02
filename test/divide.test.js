const { expect } = require("chai");
const divide = require("../src/divide");

describe("divide.js", () => {
    it("should return 5 for divide(10, 2)", () => {
        expect(divide(10, 2)).to.equal(5);
    });

    it("should return NaN for divide(10, 0)", () => {
        expect(divide(10, 0)).to.be.NaN;
    });

    it("should handle negative numbers", () => {
        expect(divide(-10, 2)).to.equal(-5);
    });

    it("should handle decimals", () => {
        expect(divide(7.5, 2.5)).to.equal(3);
    });
});
