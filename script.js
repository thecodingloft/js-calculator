const output = document.getElementById('output')
const buttons = document.getElementsByClassName('button')

// set the variables
let calculation = ''
let currentNumber = ''

console.log(eval('1+2*2'))

// invoke the event listener to add the 
Array.from(buttons).forEach((button) => {

    button.addEventListener('click', () => { 

        console.log(calculation)
        console.log(calculation.charAt(calculation.length - 1))

        // check if button contains number and add values
        if (button.classList.contains('number')){
            console.log(calculation)
            // add the values to the empy string
            currentNumber = currentNumber.concat(button.innerHTML)

            // output the value you clicked in the output field
            output.innerHTML = currentNumber
        }
        // check if button contains operator
        else if (button.classList.contains('operator')) {
                if (currentNumber) {
                // add the current Number to the calculation string before adding the operator
                calculation =  calculation.concat(currentNumber, button.innerHTML)
                currentNumber = ''
                output.innerHTML = button.innerHTML
                } else if (calculation.charAt(calculation.length - 1).match(/\+-\*\^\//)) {
                    console.log('regex')
                }
        }

        // TODO - Add the exponent correctly to the string
        else if (button.id === 'exponent') {
            calculation =  calculation.concat(currentNumber, '**')
            currentNumber = ''
            console.log(calculation)
            output.innerHTML = button.innerHTML
        }
            
        else if (button.id === 'equals') {
            
            // add the current Number to the calculation string before adding the operator
            calculation =  calculation.concat(currentNumber)
            console.log(calculation)
            // convert the string to an equation and evaluate it
            calculatedResult = eval(calculation)
            output.innerText = calculatedResult
            // reset the values
            calculation = currentNumber = ''
        }

        else if (button.id === 'clear') {
            // reset the values
            calculation = currentNumber = ''
            output.innerText = 0
        }

        else if (button.id === 'switch') {
            currentNumber = eval(currentNumber) * -1
            output.innerHTML = currentNumber
        }

})})
