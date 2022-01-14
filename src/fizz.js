const fizz = (x) => {
	if (x % 15 === 0) {
		return "fizzbuzz";
	} else if (x % 5 === 0) {
		return "buzz";
	} else if (x % 3 === 0) {
		return "fizz";
	} else {
		return x;
	}
};

const getOneToOneHundred = () => {
	const all = [];

	for (let i = 1; i <= 100; i++) {
		all.push(fizz(i));
	}

	return all;
};

module.exports = {
	fizz,
	getOneToOneHundred,
};
