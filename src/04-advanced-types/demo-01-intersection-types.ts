interface Admin {
	name: string
	privileges: string[]
}

interface Employee {
	name: string
	startDate: Date
}

interface ElevatedEmployee extends Admin, Employee {}

// usage of intersection types
// ElevatedEmployee is the type that has all the properties of Admin and Employee
// type ElevatedEmployee = Admin & Employee

const e1: ElevatedEmployee = {
	name: 'jerry',
	privileges: ['create-server'],
	startDate: new Date()
}

console.log('e1 is', typeof e1)

type Combinable = string | number
type Numeric = number | boolean
// usage of intersection types
// Universal is number
type Universal = Combinable & Numeric
const universal = 2

console.log('universal type is', typeof universal)

export {}