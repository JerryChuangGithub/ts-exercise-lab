interface Bird {
	flyingSpeed: number
}

interface Horse {
	runningSpeed: number
}

type Animal = Bird | Horse

function moveAnimal(animal: Animal) {
	let speed
	if ('flyingSpeed' in animal) {
		speed = animal.flyingSpeed
	} else {
		speed = animal.runningSpeed
	}
	console.log('Moving at speed: ' + speed)
}

moveAnimal({ flyingSpeed: 10 })



// // usage of discriminated unions
// interface Bird {
// 	type: 'bird'
// 	flyingSpeed: number
// }

// interface Horse {
// 	type: 'horse'
// 	runningSpeed: number
// }

// type Animal = Bird | Horse

// function moveAnimal(animal: Animal) {
// 	let speed
// 	switch (animal.type) {
// 		case 'bird':
// 			speed = animal.flyingSpeed
// 			break
// 		case 'horse':
// 			speed = animal.runningSpeed
// 			break
// 	}
// 	console.log('Moving at speed: ' + speed)
// }

// moveAnimal({ type: 'bird', flyingSpeed: 10 })

export {}