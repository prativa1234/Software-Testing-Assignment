const { expect } = require("chai");
const add = require("../src/add");

describe("add.js", () => {
    it("should return 30 for add(10, 20)", () => {
        expect(add(10, 20)).to.equal(30);
    });

    it("should return 0 for add(-10, 10)", () => {
        expect(add(-10, 10)).to.equal(0);
    });

    it("should handle decimals", () => {
        expect(add(1.5, 2.5)).to.equal(4.0);
    });
});
