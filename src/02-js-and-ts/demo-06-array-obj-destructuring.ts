const numbers = [1, 2, 3, 4, 5]
const [num1, num2, ...otherNumbers] = numbers

console.log(num1, num2, otherNumbers)



const person = {
	name: 'jerry',
	age: 30,
	hobbies: ['Sports', 'Cooking']
}

const { name: userName, age } = person
console.log(userName, age)

// const { name: userName, ...useInfos } = person
// console.log(userName, useInfos)

export {}