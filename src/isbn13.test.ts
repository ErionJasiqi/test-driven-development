import { isValid } from "./isbn13";

describe("ISBN-13 Validation", () => {
    test("Valid ISBN-13 '9780306406157' returns true", () => {
        expect(isValid("9780306406157")).toBe(true);
    });
    test("Invalid ISBN-13 '9780306406158' returns false", () => {
        expect(isValid("9780306406158")).toBe(false);
    });
    test("Invalid ISBN-13 '97803064061X' should throw error", () => {
        expect(() => isValid("97803064061X")).toThrow("Invalid ISBN format");
    });

    test.each([
        ["9780306406157", true],
        ["9780306406158", false],
        ["9791234567892", true],
        ["9791234567893", false],
        ["9781234567890", false],
        ["9799999999999", true],
    ])("ISBN '%s' is valid: %p", (isbn, expected) => {
        expect(isValid(isbn)).toBe(expected);
    });

    test("ISBN-13 with non-numeric characters throws error", () => {
        expect(() => isValid("978-0306406157")).toThrow("Invalid ISBN format");
        expect(() => isValid("97803064x6157")).toThrow("Invalid ISBN format");
    });
    test("ISBN-13 with incorrect length throws error", () => {
        expect(() => isValid("978030640615")).toThrow("Invalid ISBN length");
        expect(() => isValid("97803064061578")).toThrow("Invalid ISBN length");
    });

});
