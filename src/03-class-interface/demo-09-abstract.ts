abstract class Department {
	static company: string = '91APP'
	protected employees: string[] = []
	constructor(protected readonly id: string, private name: string) {
	}

	static generateCopyrite() {
		console.log(`Copyrite © 2013-${new Date().getUTCFullYear()} ${Department.company}`)
	}

	// abstract describe(this: Department) {
	// 	console.log(`Department (${this.id}): ${this.name}`)
	// }
	abstract describe(this: Department): void

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

	describe() {
		console.log(`IT Department, ID: (${this.id})`)
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

	describe() {
		console.log(`Accounting Department, ID: (${this.id})`)
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
console.log(Department.generateCopyrite())

const accounting = new AccountingDepartment('d2', [])
accounting.addEmployee('Alice')
accounting.addEmployee('David')
accounting.describe()
accounting.printEmployeeInformation()

accounting.addReport('Something went wrong...')
console.log(accounting.mostRecentReport)

accounting.mostRecentReport = 'Year End Report'
accounting.printReports()
console.log(Department.generateCopyrite())

export { }