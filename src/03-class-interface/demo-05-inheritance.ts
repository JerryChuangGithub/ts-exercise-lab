class Department {
	private employees: string[] = []
	constructor(private readonly id: string, private name: string) {
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

class ITDepartment extends Department {
	constructor(id: string, private admins: string[]) {
		super(id, 'IT')
	}
}

class AccountingDepartment extends Department {
	constructor(id: string, private reports: string[]) {
		super(id, 'Accounting')
	}

	addReport(text: string) {
		this.reports.push(text)
	}

	printReports() {
		console.log(this.reports)
	}
}

const it = new ITDepartment('d1', ['Jerry'])
it.addEmployee('Tom')
it.addEmployee('Manuel')
it.describe()
it.printEmployeeInformation()

const accounting = new AccountingDepartment('d2', [])
accounting.addEmployee('Alice')
accounting.addEmployee('David')
accounting.describe()
accounting.printEmployeeInformation()
accounting.addReport('Something went wrong...')
accounting.printReports()

export { }