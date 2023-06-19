function add(n1: number, n2: number) {
	return n1 + n2
}

function printResult(num: number) {
	console.log('Result: ' + num)
}

function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
	const result = n1 + n2
	cb(result)
}

addAndHandle(10, 20, (num: number) => {
	console.log(num)
})

addAndHandle(20, 20, printResult)

// addAndHandle(20, 20, add)

export {}