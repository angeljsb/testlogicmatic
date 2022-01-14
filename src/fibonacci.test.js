const fibonacci = require("./fibonacci");

test("Expect f(0) to be equals 0", () => {
	expect(fibonacci(0)).toBe(0);
});

test("Expect f(1) to be equals 1", () => {
	expect(fibonacci(1)).toBe(1);
});

test("Expect f(10) to be equals 55", () => {
	expect(fibonacci(10)).toBe(55);
});

test("Expect f(24) to be equals 46368", () => {
	expect(fibonacci(24)).toBe(46368);
});
