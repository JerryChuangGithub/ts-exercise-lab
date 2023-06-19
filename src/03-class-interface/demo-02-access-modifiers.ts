class Department {
	// name: string
	// employees: string[] = []
	private name: string
	private employees: string[] = []

	constructor(n: string) {
		this.name = n
	}

	describe(this: Department) {
		console.log('Department: ' + this.name)
	}

	addEmployee(employee: string) {
		this.employees.push(employee)
	}

	printEmployeeInformation() {
		console.log(this.employees.length)
		console.log(this.employees)
	}
}

const accounting = new Department('Accounting')
accounting.addEmployee('Jerry')
accounting.addEmployee('Manuel')

// javascript can't prevent this
// accounting.employees[2] = 'Anna'

accounting.describe()
accounting.printEmployeeInformation()

export {}