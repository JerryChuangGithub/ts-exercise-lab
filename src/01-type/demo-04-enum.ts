// enum Role { ADMIN, READ_ONLY, AUTHOR }
// enum Role { ADMIN = 1, READ_ONLY = 2, AUTHOR }
// enum Role { ADMIN = 100, READ_ONLY, AUTHOR }
enum Role { ADMIN = 'ADMIN', READ_ONLY = 1, AUTHOR }

const person = {
	name: 'Todd',
	age: 27,
	hobbies: ['Sports', 'Cooking'],
	role: Role.ADMIN
}

console.log(person)

export {}