// generic utility types
// case 1: partial
interface CourseGoal {
	title: string
	description: string
	completeUntil: Date
}

function createCourseGoal(
	title: string,
	description: string,
	date: Date
): CourseGoal {
	let courseGoal: Partial<CourseGoal> = {}
	// let courseGoal = {}
	// let courseGoal: CourseGoal = {}
	courseGoal.title = title
	courseGoal.description = description
	courseGoal.completeUntil = date
	return courseGoal as CourseGoal
}


// case 2: Readonly
// const names: Readonly<string[]> = ['Max', 'Anna']
const names = ['Max', 'Anna']
names.push('Manu')
names.pop()


export {}