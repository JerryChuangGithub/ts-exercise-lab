const button = document.querySelector("button")!
const input1 = document.getElementById("num1")! as HTMLInputElement
const input2 = document.getElementById("num2")! as HTMLInputElement

function add(num1: number, num2: number) {
    return num1 + num2
}

button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value))
})

const number1 = 4.8
const number2 = 5
const printResult = true
const resultPhrase = "Result is: "

function add2(n1: number, n2: number, showResult: boolean, resultPhrase: string) {
	const result = n1 + n2;
	if (showResult) {
		console.log(`${resultPhrase} ${result}`);
	} else {
		return result;
	}
}

add2(number1, number2, printResult, resultPhrase)

export {}