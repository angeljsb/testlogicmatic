const { fizz } = require("./fizz");

test("Expect f(97) to be equals 97", () => {
	expect(fizz(97)).toBe(97);
});

test("Expect f(9) to be equals 'fizz'", () => {
	expect(fizz(9)).toBe("fizz");
});

test("Expect f(55) to be equals 'buzz'", () => {
	expect(fizz(55)).toBe("buzz");
});

test("Expect f(45) to be equals 'fizzbuzz'", () => {
	expect(fizz(45)).toBe("fizzbuzz");
});
