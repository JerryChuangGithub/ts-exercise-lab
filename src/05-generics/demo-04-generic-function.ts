interface Lentghy {
	length: number
}

function countAndDescribe<T extends Lentghy>(element: T): [T, string] {
	let decriptionTest = 'Got no value'

	if (element.length === 1) {
		decriptionTest = 'Got 1 element'
	} else if (element.length > 1) {
		decriptionTest = 'Got ' + element.length + ' elements'
	}

	return [element, decriptionTest]
}

// string and array have a length property, so they are assignable to the type of T
console.log(countAndDescribe(''))
console.log(countAndDescribe('Hi there!'))
console.log(countAndDescribe([]))
console.log(countAndDescribe(['Sports', 'Cooking']))
console.log(countAndDescribe([1, 2, 3]))

// numbers and object don't have a length property, so they are not assignable to the type of T
// console.log(countAndDescribe(0))
// console.log(countAndDescribe({}))

export {}