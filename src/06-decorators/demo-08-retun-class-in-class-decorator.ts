function Logger(logString: string) {
	console.log('LOGGER FACTORY')
	return function (constructor: Function) {
		console.log(logString)
		console.log(constructor)
	}
}

function WithTemplate(template: string, hookId: string) {
	console.log('TEMPLATE FACTORY')
	return function <T extends { new(...args: any[]): { name: string } }>(originConstructor: T) {
		return class extends originConstructor {
			constructor(..._: any[]) {
				super()
				const hookEl = document.getElementById(hookId)
				if (hookEl) {
					console.log('Rendering template')
					hookEl.innerHTML = template
					hookEl.querySelector('h1')!.textContent = this.name
				}
			}
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

const p1 = new Person()
const p2 = new Person()

export {}