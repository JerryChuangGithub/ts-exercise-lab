console.log('')
console.log('demo 1')
console.log('-----------------')

function merge(objA: object, objB: object) {
	return Object.assign(objA, objB)
}

const mergedObj = merge({ name: 'Jerry' }, { age: 30 })
console.log(mergedObj)
// console.log(mergedObj.name)

console.log('')
console.log('demo 2')
console.log('-----------------')

// function merge2<T, U>(objA: T, objB: U) {
function merge2<T extends {}, U>(objA: T, objB: U) {
	return Object.assign(objA, objB)
}

const mergedObj2 = merge2({ name: 'Jerry' }, { age: 30 })
console.log(mergedObj2)
console.log(mergedObj2.name)

export {}