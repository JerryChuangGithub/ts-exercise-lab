interface Named {
	readonly name?: string
}

interface Greetable extends Named {
	greet(phrase: string): void
}

class Person implements Greetable {
	name?: string
	age = 30

	constructor(n?: string) {
		this.name = n
	}

	greet(phrase: string) {
		if (this.name) {
			console.log(phrase + ' ' + this.name)
		} else {
			console.log('Hi!')
		}
	}
}

let user: Greetable
// user = new Person('Jerry')
user = new Person()
user.greet('Hi there - I am')
console.log(user)

export {}