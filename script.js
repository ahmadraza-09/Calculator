
// Get input by buttons
function getValue(value){
    let inputValue = document.getElementById('inputValue')
  
    let valueInput = inputValue.value
    inputValue.value = valueInput+value
}

// Clear All Values
function clearAll(){
    let inputValue = document.getElementById('inputValue')

    let valueInput =inputValue.value
    inputValue.value=""
}

// Clear One Value
function clearOne() {
    let inputValue = document.getElementById('inputValue')
    let valueInput = inputValue.value

    if (valueInput.length > 0) {
    valueInput = valueInput.slice(0, -1);

    inputValue.value = valueInput;

    }
}


// Calculate Value

function calculate() {
    let operators = ['+', '-', '/', '*']
    let inputValue = document.getElementById('inputValue')
    let valueInput = inputValue.value
  
    for (let i = 0; i < operators.length; i++) {
      let operator = operators[i]
  
      let Num = valueInput.split(operator)
  
      let Num1 = parseFloat(Num[0])
      let Num2 = parseFloat(Num[1])
  
      console.log('num =', Num, typeof (Num1), typeof (Num2))
  
      if (Num.length == 2) {
        console.log("lenght is 2")
  
        if (operator == '+') {
          let result = (Num1 + Num2)
          inputValue.value = result
        }
        else if (operator == '-') {
          let result = Num1 - Num2
          inputValue.value = result
        }
        else if (operator == '*') {
          let result = Num1 * Num2
          inputValue.value = result
        }
        else if (operator == '/') {
          let result = Num1 / Num2
          inputValue.value = result
        }
      }
    }
}