function Logger(logString: string) {
	console.log('LOGGER FACTORY')
	return function (constructor: Function) {
		console.log(logString)
		console.log(constructor)
	}
}

function WithTemplate(template: string, hookId: string) {
	console.log('TEMPLATE FACTORY')
	return function (_: Function) {
		const hookEl = document.getElementById(hookId)
		if (hookEl) {
			console.log('Rendering template')
			hookEl.innerHTML = template
		}
	}
}

@Logger('LOGGING - PERSON')
@WithTemplate('<h1>My Person Object</h1>', 'app')
class Person {
	name = 'Jerry'

	constructor() {
		console.log('Creating person object...')
	}
}

// const p1 = new Person()
// const p2 = new Person()

export {}