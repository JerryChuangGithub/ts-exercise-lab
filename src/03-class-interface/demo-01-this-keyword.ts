class Department {
	name: string

	constructor(n: string) {
		this.name = n
	}

	describe() {
		console.log('Department: ' + this.name)
	}
	// describe(this: Department) {
	// 	console.log('Department: ' + this.name)
	// }
}

const accounting = new Department('Accounting')
accounting.describe()

const accountingCopy = { describe: accounting.describe }
// const accountingCopy = { name: 'DUMMY', describe: accounting.describe }
accountingCopy.describe()

export {}