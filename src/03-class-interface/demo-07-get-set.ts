class Department {
	protected employees: string[] = []
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
	private lastReport: string

	get mostRecentReport(): string {
		if (this.lastReport) {
			return this.lastReport
		}

		throw new Error('No report found.')
	}

	set mostRecentReport(value: string) {
		if (!value) {
			throw new Error('Please pass in a valid value!')
		}

		this.addReport(value)
	}

	constructor(id: string, private reports: string[]) {
		super(id, 'Accounting')
		this.lastReport = reports[0]
	}

	addEmployee(employee: string) {
		if (employee === 'Alice') {
			return
		}
		this.employees.push(employee)
	}

	addReport(text: string) {
		this.lastReport = text
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

// error: accounting.mostRecentReport = ''
// console.log(accounting.mostRecentReport)
accounting.addReport('Something went wrong...')
// current report
console.log(accounting.mostRecentReport)

// error: when set to empty string, it will throw an error
accounting.mostRecentReport = ''
// current report
// accounting.mostRecentReport = 'Year End Report'
accounting.printReports()

export { }