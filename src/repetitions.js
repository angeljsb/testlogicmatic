const repetitions = (text) => {
	let words = text.toLowerCase().split(/\W+/g);

	let repetitions = {};

	while (words.length > 0) {
		const word = words[0];
		repetitions[word] = words.filter((w) => w === word).length;
		words = words.filter((w) => w !== word);
	}

	return repetitions;
};

module.exports = repetitions;
