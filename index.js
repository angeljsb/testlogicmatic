const readline = require("readline").createInterface({
	input: process.stdin,
	output: process.stdout,
});
const fibonacci = require("./src/fibonacci");
const repetitions = require("./src/repetitions");
const { getOneToOneHundred } = require("./src/fizz");

const showFibonacci = () => {
	readline.question(
		`Insert an integer to find its fibonacci value\n`,
		(input) => {
			const parseInput = parseInt(input);
			if (Number.isInteger(parseInput)) {
				console.log(
					`The value of ${input} in fibonacci serie is ${fibonacci(parseInput)}`
				);
			} else {
				console.log(`${input} is not an integer`);
			}
			readline.close();
		}
	);
};

const showRepetitions = () => {
	readline.question(
		`Insert a text to find the repetitions for each word\n`,
		(input) => {
			const objectResult = repetitions(input);
			Array.from(Object.keys(objectResult)).forEach((word) => {
				console.log(`The word ${word} is present ${objectResult[word]} times`);
			});

			readline.close();
		}
	);
};

const showOneHundred = () => {
	console.log(getOneToOneHundred().join(", "));
};

const showMessage = () => {
	console.log(
		"Bienvenido a mi prueba. Puede probar las funcionalidades con los siguiente comandos"
	);
	console.log("\t - Escriba uno (1) para probar fibonacci.js");
	console.log(
		"\t - Escriba dos (2) para contar las repeticiones de cada palabra en un texto"
	);
	console.log(
		"\t - Escriba tres (3) para imprimir los números del uno al cien con los cambios respectivos"
	);
	console.log("\t - Añada cualquier otro valor para salir");

	readline.question(``, (option) => {
		switch (option) {
			case "1":
				showFibonacci();
				break;
			case "2":
				showRepetitions();
				break;
			case "3":
				showOneHundred();
				break;
			default:
				process.exit();
				break;
		}
	});
};

showMessage();
