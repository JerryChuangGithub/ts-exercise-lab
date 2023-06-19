function add(n1: number, n2: number) {
	return n1 + n2
}

function printResult(num: number) {
// function printResult(num: number): void {
	console.log('Result: ' + num)
}

// function printResult(num: number): undefined {
// 	console.log('Result: ' + num)
// 	return
// }

const printResultMethodReturnedValue = printResult(add(5, 12))
console.log(printResultMethodReturnedValue)

export {}