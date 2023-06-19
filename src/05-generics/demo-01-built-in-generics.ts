const names = ['Max', 'Anna']
// const names: string[] = ['Max', 'Anna']
// const names: Array = ['Max', 'Anna']
// const names: Array<string> = ['Max', 'Anna']
console.log(names[0].split(' '))

// const promise = new Promise((resolve, reject) => {
const promise: Promise<any> = new Promise((resolve, reject) => {
// const promise: Promise<string> = new Promise((resolve, reject) => {
	setTimeout(() => {
		resolve('This is done!')
	}, 2000)
})

promise.then(data => {
	data.split(' ')

	// if (typeof data === 'string') {
	// 	data.split(' ')
	// }
})

export {}