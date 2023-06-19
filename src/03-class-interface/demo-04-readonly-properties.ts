class Department {
	private employees: string[] = []
	constructor(private readonly id: string, private name: string) {
	}

	describe(this: Department) {
		console.log(`Department (${this.id}): ${this.name}`)
	}

	addEmployee(employee: string) {
		// only can be assigned once, and it must be assigned in the constructor
		// javascript will not enforce this, but typescript will
		// this.id = 'd2'

		this.employees.push(employee)
	}

	printEmployeeInformation() {
		console.log(this.employees.length)
		console.log(this.employees)
	}
}

const accounting = new Department('d1', 'Accounting')
accounting.addEmployee('Jerry')
accounting.addEmployee('Manuel')
accounting.describe()
accounting.printEmployeeInformation()

export {}