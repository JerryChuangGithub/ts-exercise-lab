function Log(target: any, propertyName: string | Symbol) {
	console.log('Property decorator!')
	console.log(target, propertyName)
}

class Product {
	@Log
	title: string
	private _price: number

	@Log
	set price(val: number) {
		if (val > 0) {
			this._price = val
		} else {
			throw new Error('Invalid price - should be positive!')
		}
	}

	constructor(t: string) {
		this.title = t
		this._price = 0
	}

	getPriceWithTax(tax: number) {
		return this._price * (1 + tax)
	}
}

export {}