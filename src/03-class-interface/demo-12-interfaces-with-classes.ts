interface Greetable {
	name: string

	greet(phrase: string): void
}

class Person implements Greetable {
	name: string
	age = 30

	constructor(n: string) {
		this.name = n
	}

	greet(phrase: string) {
		console.log(phrase + ' ' + this.name)
	}
}

let user: Greetable
// let user: Person
user = new Person('Jerry')
// console.log(user.age)
user.greet('Hi there - I am')
console.log(user)

export {}