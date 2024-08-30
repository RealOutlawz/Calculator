let num1 = 0;
let operator = " ";
let num2 = 0;

const display = document.getElementById("dispalyOutput");
const numberButtons = document.querySelectorAll(".digit");

//function operate(num1, num2, operator) {}

function buttonClicked(event) {
  const buttonNumber = event.target.textContent;

  if (display.textContent === "0") {
    display.textContent = buttonNumber + " ";
  } else {
    display.textContent += buttonNumber + " ";
  }
}

numberButtons.forEach((button) => {
  button.addEventListener("click", buttonClicked);
});

/*
make a function thats called when a button is clicked
when that function is called make a varialbe that represents the number of the button
create a if statement that looks to see if the display is showing 0, 
if it is then just update the display with the new number
if not just put the new number out
add spacing so numbers arent close together 
*/
