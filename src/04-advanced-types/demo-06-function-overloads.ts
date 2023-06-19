type Combinable = string | number

// overload signatures
// function add(a: number, b: number): number
// function add(a: string, b: string): string
// function add(a: string, b: number): string
// function add(a: number, b: string): string
// function implementation
function add(a: Combinable, b: Combinable) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString()
	}

	return a + b
}

console.log(add('Jerry', 'Chuang'))
console.log(add(1, 2))
console.log(add(10, '1'))

const result = add('Jerry', ' Chuang')
// const result = add(10, ' 1') as string
// console.log(result.split(' '))

export {}