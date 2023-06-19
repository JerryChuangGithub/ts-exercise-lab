const userName = 'jerry'
// userName = 'tom' // error TS2588: Cannot assign to 'userName' because it is a constant.

let age = 18
age = 19
if (age > 18) {
	var isAdult = true
}

// console.log(isAdult) // true



function add(a: number, b: number) {
	var result
	result = a + b
	return result
}

// console.log(result) // error TS2304: Cannot find name 'result'.

export {}