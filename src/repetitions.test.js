const repetitions = require("./repetitions");

const devText =
	"Hi how are things? How are you?Are you a developer? I am also a developer";
const trabText = `Compadre compreme un coco
Compadre coco no compro
Porque quien coco poco come
Poco coco compra
Yo poco como coco
Así que poco coco compro`;

test("Expect 'developer' to be present 2 times", () => {
	expect(repetitions(devText)["developer"]).toBe(2);
});

test("Expect 'coco' to be present 6 times", () => {
	expect(repetitions(trabText)["coco"]).toBe(6);
});

test("Expect 'are' to be present 3 times", () => {
	expect(repetitions(devText)["are"]).toBe(3);
});

test("Expect 'poco' to be present 4 times", () => {
	expect(repetitions(trabText)["poco"]).toBe(4);
});
