console.log('')
console.log('demo 1')
console.log('-----------------')

interface Admin {
	name: string
	privileges: string[]
}

interface Employee {
	name: string
	startDate: Date
}

type UnknownEmployee = Admin | Employee

const e1: UnknownEmployee = {
	name: 'jerry',
	privileges: ['create-server'],
	startDate: new Date()
}

function printEmployeeInformation(emp: UnknownEmployee) {
	console.log('Name: ' + emp.name)

	// only in keyword works
	if ('privileges' in emp) {
	// Not work
	// if (typeof emp.privileges !== 'undefined') {
	// if (typeof emp === 'Admin') {
	// if (emp instanceof Admin) {
		console.log('Privileges: ' + emp.privileges)
	}
	if ('startDate' in emp) {
		console.log('Start Date: ' + emp.startDate)
	}
}

printEmployeeInformation(e1)


console.log('')
console.log('demo 2')
console.log('-----------------')

type Combinable = string | number
type Numeric = number | boolean
type Universal = Combinable & Numeric

function add(a: Combinable, b: Combinable) {
	if (typeof a === 'string' || typeof b === 'string') {
		return a.toString() + b.toString()
	}

	return a + b
}

console.log(add('Jerry', 'Chuang'))
console.log(add(1, 2))
console.log(add(10, '1'))


console.log('')
console.log('demo 3')
console.log('-----------------')

class Car {
	drive() {
		console.log('Driving...')
	}
}

class Truck {
	drive() {
		console.log('Driving a truck...')
	}

	loadCargo(amount: number) {
		console.log('Loading cargo ...' + amount)
	}
}

type Vehicle = Car | Truck
const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
	vehicle.drive()
	// in and instanceof both work
	if ('loadCargo' in vehicle) {
	// if (vehicle instanceof Truck) {
		vehicle.loadCargo(1000)
	}
}

useVehicle(v1)
useVehicle(v2)

// export {}