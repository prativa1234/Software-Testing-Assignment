import { expect } from 'chai';
import add from "../src/add.js";

describe("add.js", () => {
    it("should return 10 for add(6, 4)", () => {
        expect(add(6, 4)).to.equal(10);
    });

    it("should return 0 for add(0, 0)", () => {
        expect(add(0, 0)).to.equal(0);
    });

    it("should handle negative numbers", () => {
        expect(add(-5, -3)).to.equal(-8);
    });

    it("should return correct value when adding positive and negative numbers", () => {
        expect(add(10, -5)).to.equal(5);
    });

    it("should handle decimals", () => {
        expect(add(1.5, 2.5)).to.equal(4.0);
    });

    it("should handle large numbers", () => {
        expect(add(1000000000, 2000000000)).to.equal(3000000000);
    });

    it("should return the other number when one argument is 0", () => {
        expect(add(0, 5)).to.equal(5);
        expect(add(10, 0)).to.equal(10);
    });

    it("should return NaN if one or both arguments are not numbers", () => {
        expect(add("6", 4)).to.be.NaN;
        expect(add(6, "4")).to.be.NaN;
        expect(add("6", "4")).to.be.NaN;
    });

    it("should return NaN if no arguments are provided", () => {
        expect(add()).to.be.NaN;
    });
});
