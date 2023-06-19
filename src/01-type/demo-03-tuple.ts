let role: [string, number]
role = ["admin", 2]
// role = ["admin", 2, "user"]
// role = [1, "admin"]
role.push("user")
console.log(role)

let rule = ["employee", 3]
rule = ["employee", 3, "user"]
// rule = ["employee", 3, false]
console.log(rule)

export {}