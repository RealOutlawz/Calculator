let num1 = 0;
let num2 = 0;
let operator = " ";
let equalsClicked = false;

const display = document.getElementById("dispalyOutput");
const numberButtons = document.querySelectorAll(".digit");
const operatorButtons = document.querySelectorAll(".operator");
const equalsButton = document.querySelector(".equals");
const clearButton = document.querySelector(".clear");

function operate(num1, num2, operator) {}

/*
After the number is displayed into the display store that number into num1
Do the same for the operator and store it into its variable
Same for num2
After the equal signs is clicked run the operate command to do the calculation
Possible use a switch case?
*/

numberButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const buttonNumValue = event.target.textContent;

    if (display.textContent === "0") {
      display.textContent = buttonNumValue;
    } else {
      display.textContent += buttonNumber + " ";
    }

    if (operator) {
      num2 += buttonNumber;
    } else {
      num1 += buttonNumber;
    }
  });
});
