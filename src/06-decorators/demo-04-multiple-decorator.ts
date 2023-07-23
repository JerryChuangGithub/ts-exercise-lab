// 可以取消註解來執行不同的 decorator 觀察執行順序

// case A: multi-decorator without factory

function Logger(constructor: Function) {
	console.log('LOGGING')
	console.log(constructor)
}

function HookTemplate(_: Function) {
	console.log('HOOK TEMPLATE')
	const hookEl = document.getElementById('app')
	if (hookEl) {
		console.log('Rendering template')
		hookEl.innerHTML = '<h1>My Person Object</h1>'
	}
}

@Logger
@HookTemplate
class Person {
	name = 'Jerry'

	constructor() {
		console.log('Creating person object...')
	}
}


// case B: multi-decorator with factory

// function Logger(logString: string) {
// 	console.log('LOGGER FACTORY')
// 	return function (constructor: Function) {
// 		console.log(logString)
// 		console.log(constructor)
// 	}
// }

// function WithTemplate(template: string, hookId: string) {
// 	console.log('TEMPLATE FACTORY')
// 	return function (_: Function) {
// 		const hookEl = document.getElementById(hookId)
// 		if (hookEl) {
// 			console.log('Rendering template')
// 			hookEl.innerHTML = template
// 		}
// 	}
// }

// @Logger('LOGGING - PERSON')
// @WithTemplate('<h1>My Person Object</h1>', 'app')
// class Person {
// 	name = 'Jerry'

// 	constructor() {
// 		console.log('Creating person object...')
// 	}
// }


export {}