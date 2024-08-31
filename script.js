let num1 = "";
let num2 = "";
let operator = "";
let equalClicked = false;

const display = document.getElementById("displayOutput");
const numberButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");

// takes numbers and operator and calculates
function operate(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        return "Error: Division by zero";
      }
      return num1 / num2;
    default:
      return "Error: Invalid operator";
  }
}

/*
After the number is displayed into the display store that number into num1
Do the same for the operator and store it into its variable
Same for num2
After the equal signs is clicked run the operate command to do the calculation
Possible use a switch case?
*/

/*
Whatever number is pressed their text content eg: 1 or 2 or 3 will be stores into the const variable
If the equal button was already clicked then the display will show the number pressed and set the variable to false
If the equal button was not clicked then the number will be added to the display
*/
numberButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonNumValue = event.target.textContent;

    if (equalClicked) {
      display.textContent = buttonNumValue;
      equalClicked = false;
    } else {
      display.textContent === "0" //Check to see if the display is showing 0
        ? (display.textContent = buttonNumValue) // if yes then makes the display output equal the number pressed
        : (display.textContent += buttonNumValue); // if no then adds that number onto the numbers already present
    }

    if (operator) {
      num2 += buttonNumValue; // if the operator has a value in it eg: * or / then it returns true and stores in num2
    } else {
      num1 += buttonNumValue; // if the operator doesnt have a value then it then its stored in num1
    }
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    operator = event.target.textContent;
    display.textContent = "";
  });
});
