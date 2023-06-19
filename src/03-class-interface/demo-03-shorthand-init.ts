class Department {
	// private id: string
	// private name: string
	// constructor(id: string, n: string) {
	// 	this.id = id
	// 	this.name = n
	// }

	private employees: string[] = []
	constructor(private id: string, private name: string) {
	}

	describe(this: Department) {
		console.log(`Department (${this.id}): ${this.name}`)
	}

	addEmployee(employee: string) {
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