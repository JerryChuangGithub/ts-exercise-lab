type AddFn = (a: number, b: number) => number
// interface AddFn {
// 	(a: number, b: number): number
// }

let add: AddFn

// add = (n1: string, n2: number) => {
add = (n1: number, n2: number) => {
	return n1 + n2
}

console.log(add(5, 10));

export {}