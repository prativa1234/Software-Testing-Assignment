import { expect } from "chai";
import countBy from "../src/countBy.js";

describe("countBy.js", () => {
    it("should count elements by a property value", () => {
        const users = [
            { user: "barney", active: true },
            { user: "betty", active: true },
            { user: "fred", active: false },
        ];
        const result = countBy(users, (value) => value.active);
        expect(result).to.deep.equal({ true: 2, false: 1 });
    });

    it("should handle arrays of numbers", () => {
        const numbers = [1.1, 2.2, 3.3, 2.4];
        const result = countBy(numbers, (value) => Math.floor(value));
        expect(result).to.deep.equal({ 1: 1, 2: 2, 3: 1 });
    });

    it("should count elements by string length", () => {
        const words = ["one", "two", "three", "four", "five"];
        const result = countBy(words, (value) => value.length);
        expect(result).to.deep.equal({ 3: 2, 4: 2, 5: 1 });
    });

    it("should return an empty object for an empty array", () => {
        const result = countBy([], (value) => value);
        expect(result).to.deep.equal({});
    });

    it("should handle arrays with duplicate values", () => {
        const numbers = [1, 2, 2, 3, 3, 3];
        const result = countBy(numbers, (value) => value);
        expect(result).to.deep.equal({ 1: 1, 2: 2, 3: 3 });
    });

    it("should handle non-array objects", () => {
        const object = { a: 1, b: 2, c: 3 };
        const result = countBy(object, (value) => value % 2 === 0);
        expect(result).to.deep.equal({ false: 2, true: 1 });
    });

    it("should throw an error for invalid iteratee", () => {
        const input = [1, 2, 3];
        expect(() => countBy(input, null)).to.throw();
    });

    it("should throw an error for invalid collection input", () => {
        expect(() => countBy(null, (value) => value)).to.throw();
        expect(() => countBy(undefined, (value) => value)).to.throw();
        expect(() => countBy("not a collection", (value) => value)).to.throw();
    });
});
