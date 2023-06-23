class DataStorage<T> {
// class DataStorage<T extends string | number | boolean> {
	private data: T[] = []

	addItem(item: T) {
		this.data.push(item)
	}

	removeItem(item: T) {
		// if (this.data.indexOf(item) === -1) {
		// 	return
		// }

		this.data.splice(this.data.indexOf(item), 1)
	}

	getItems() {
		return [...this.data]
	}
}

const textStorage = new DataStorage<string>()
textStorage.addItem('Jerry')
textStorage.addItem('Tom')
textStorage.removeItem('Jerry')
console.log(textStorage.getItems())

const numberStorage = new DataStorage<number>()
numberStorage.addItem(1)
numberStorage.addItem(2)
numberStorage.removeItem(1)
console.log(numberStorage.getItems())

const objStorage = new DataStorage<object>()
objStorage.addItem({ name: 'Jerry' })
objStorage.addItem({ name: 'Tom' })
objStorage.removeItem({ name: 'Jerry' })
console.log(objStorage.getItems())

export {}