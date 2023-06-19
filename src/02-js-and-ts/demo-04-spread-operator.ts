const hobbies = ['Sports', 'Cooking']
const activeHobbies = ['Hiking']

// activeHobbies.push(hobbies) // error TS2345: Argument of type 'string[]' is not assignable to parameter of type 'string'.
activeHobbies.push(hobbies[0], hobbies[1])
// activeHobbies.push(...hobbies)

console.log(activeHobbies)

export {}