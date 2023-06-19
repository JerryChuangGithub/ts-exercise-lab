// called index properties or index signature
interface ErrorContainer {
	[prop: string]: string
	// [prop: number]: string
}

const errorBag: ErrorContainer = {
	email: 'Not a valid email',
	username: 'Must start with a capital character'
}

for (const key in errorBag) {
	console.log(`key: ${key}, value: ${errorBag[key]}`)
}

export {}