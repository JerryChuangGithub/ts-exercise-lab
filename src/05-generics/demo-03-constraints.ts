console.log('')
console.log('demo 1')
console.log('-----------------')

function merge<T extends object, U>(objA: T, objB: U) {
	return Object.assign(objA, objB)
}

const mergedObj = merge({ name: 'Jerry' }, 30 )
console.log(mergedObj)
// console.log(mergedObj.age)


console.log('')
console.log('demo 2')
console.log('-----------------')

function merge2<T extends object, U extends object>(objA: T, objB: U) {
	return Object.assign(objA, objB)
}

// const mergedObj2 = merge({ name: 'Jerry' }, 30 )
const mergedObj2 = merge({ name: 'Jerry' }, { age: 30 })
console.log(mergedObj2)
console.log(mergedObj2.age)

export {}