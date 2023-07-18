function Logger(logString: string) {
	return function (constructor: Function) {
		console.log(logString)
		console.log(constructor)
	}
}

// 這裡的 @Logger('LOGGING - PERSON') 就是一個裝飾器工廠
@Logger('LOGGING - PERSON')
class Person {
	name = 'Jerry'

	constructor() {
		console.log('Creating person object...')
	}
}

const person = new Person()
// 從下面的輸出結果可以看到，裝飾器會在類別被定義時就執行，而不是在類別被實例化時才執行
console.log(person)

export {}