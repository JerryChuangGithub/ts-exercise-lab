function Logger(logString: string) {
	return function (constructor: Function) {
		console.log(logString)
		console.log(constructor)
	}
}

function WithTemplate(template: string, hookId: string) {
	return function (_: Function) {
		const hookEl = document.getElementById(hookId)
		if (hookEl) {
			hookEl.innerHTML = template
		}
	}
}

// function WithTemplate(template: string, hookId: string) {
// 	return function (constructor: any) {
// 		const hookEl = document.getElementById(hookId)
// 		const p = new constructor()
// 		if (hookEl) {
// 			hookEl.innerHTML = template
// 			hookEl.querySelector('h1')!.textContent = p.name
// 		}
// 	}
// }

@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
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