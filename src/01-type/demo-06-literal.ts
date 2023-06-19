// function combine(input1: number | string, input2: number | string, resultConversion: string) {
function combine(input1: number | string, input2: number | string, resultConversion: 'as-number' | 'as-text') {
	let result;
	if ((typeof input1 === 'number' && typeof input2 === 'number') || resultConversion === 'as-number') {
		// +input1 is a shortcut to convert a string to a number
		result = +input1 + +input2;
	}
	else {
		// toString() is a method to convert a number to a string
		result = input1.toString() + input2.toString();
	}
	return result;
}

const combinedAges = combine(30, 26, 'as-number')
console.log(combinedAges)

// const combinedStringAges = combine('30', '26', 'as-number')
const combinedStringAges = combine('30', '26', 'as-text')
// const combinedStringAges = combine('30', '26', 'xxx')
console.log(combinedStringAges)

const combinedNames = combine('Max', 'Anna', 'as-text')
console.log(combinedNames)

export {}