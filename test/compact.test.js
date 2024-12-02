import { expect } from 'chai';
import compact from "../src/compact.js";

describe("compact.js", () => {

    it("should return an empty array when input is empty", () => {
        const input = [];
        const result = compact(input);
        expect(result).to.deep.equal([]);
    });

    it("should handle arrays with all falsey values", () => {
        const input = [0, false, null, undefined, NaN, ""];
        const result = compact(input);
        expect(result).to.deep.equal([]);
    });

    it("should handle mixed data types in the array", () => {
        const input = [0, "string", false, true, null, 42];
        const result = compact(input);
        expect(result).to.deep.equal(["string", true, 42]);
    });

    it("should return an empty array if input is null or undefined", () => {
        expect(compact(null)).to.deep.equal([]);
        expect(compact(undefined)).to.deep.equal([]);
    });

    it("should throw an error if input is not an array", () => {
        expect(() => compact("not an array")).to.throw();
        expect(() => compact(42)).to.throw();
        expect(() => compact({})).to.throw();
    });
});
