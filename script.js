const output = document.getElementById('output')
const buttons = document.getElementsByClassName('button')

// get each number value and parse to an integer --> check if necessary
const one = parseInt(document.getElementById('1'))
const two = parseInt(document.getElementById('2'))
const three = parseInt(document.getElementById('3'))
const four = parseInt(document.getElementById('4'))
const five = parseInt(document.getElementById('5'))
const six = parseInt(document.getElementById('6'))
const seven = parseInt(document.getElementById('7'))
const eight = parseInt(document.getElementById('8'))
const nine = parseInt(document.getElementById('9'))
const zero = parseInt(document.getElementById('0'))

// set the variables
let clickedValue = 0
let lastValue = 0
let sum = 0
let operator = ''

// invoke the event listener to add the 
Array.from(buttons).forEach((button) => {



    button.addEventListener('click', () => { 

        // check if button contains number, parse from string to int
        if (button.classList.contains('number')) {
            lastValue = clickedValue
            clickedValue = parseInt(button.innerHTML)

            console.log(clickedValue, lastValue)

            // display the output
            output.innerText = clickedValue
        }

        else if (button.id === 'add') {
            console.log('add')
            sum = add(clickedValue, lastValue)
            output.innerText = button.innerHTML
        }

        else if (button.id === 'subtract') {
            console.log('minus')
            output.innerText = button.innerHTML
        }

        else if (button.id === 'multiply') {
            console.log('multiply')
            output.innerText = button.innerHTML
        }

        else if (button.id === 'divide') {
            console.log('divide')
            output.innerText = button.innerHTML
        }

        else if (button.id === 'clear') {
            let clickedValue = 0
            let lastValue = 0
            let sum = 0
            output.innerText = clickedValue
        }

        // get the final output to the screen
        else if (button.id === 'equals') {
            console.log('equals')
            output.innerText = sum
        }
    })
})

function add(val1, val2) {
    let sum = val1 + val2
    return sum
}

function subtract(val1, val2) {
    let sum = val1 - val2
    return sum
}

function multiply(val1, val2) {
    let sum = val1 * val2
    return sum
}

function divide(val1, val2) {
    let sum = val1 / val2
    return sum
}

const result = multiply(10,2)
console.log(result)