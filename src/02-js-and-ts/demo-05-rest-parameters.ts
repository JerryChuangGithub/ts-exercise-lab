const add = (...numbers: number[]) => {
	return numbers.reduce((curResult, curValue) => {
	// return numbers.reduce((curResult, curValue, curIndex, curArray) => {
	// 	console.log(curIndex, curArray);
		return curResult + curValue;
	}, 0);
}

console.log(add(5, 10, 2, 3.7));

export {}