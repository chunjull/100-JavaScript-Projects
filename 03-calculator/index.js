const inputValue = document.querySelector("#input");
const numberBtn = document.querySelectorAll(".number");
const operatorBtn = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const negativeBtn = document.querySelector(".negative");
const percentBtn = document.querySelector(".percent");
const equalBtn = document.querySelector(".equal");

let currentNumber = "";
let previousNumber = "";
let operator = "";
let result = "";

// Update Display
function updateDisplay(value){
  if (value === "" || value === "NaN" || value === "Infinity") {
    inputValue.innerHTML = "0";
  } else {
    inputValue.innerHTML = value;
  }
}
// Number function
numberBtn.forEach(button => {
  button.addEventListener("click", () => {
    if (currentNumber === '0' && button.innerText === '0') {
      return;
    }
    if (currentNumber.includes('.') && button.innerText === '.') {
      return;
    }
    currentNumber += button.innerText;
    updateDisplay(currentNumber);
  });
});
// Clear function
clearBtn.addEventListener("click", () => {
  currentNumber = "";
  storedNumber = "";
  operator = "";
  updateDisplay("0");
});
// Negative function
negativeBtn.addEventListener("click", () => {
  if (currentNumber !== "") {
    currentNumber = (parseFloat(currentNumber) * -1).toString();
    updateDisplay(currentNumber);
  };
});
// Percent function
percentBtn.addEventListener("click", () => {
  if (currentNumber !== "") {
    currentNumber = (parseFloat(currentNumber) / 100).toString();
    updateDisplay(currentNumber);
  };
});
// Operator function
operatorBtn.forEach(button => {
  button.addEventListener("click", () => {
    if (currentNumber === "" && previousNumber === "") return;
    if (currentNumber !== "") {
      if (previousNumber !== "") {
        result = calculate(previousNumber, currentNumber, operator);
        updateDisplay(result);
        previousNumber = result;
        currentNumber = "";
      } else {
        previousNumber = currentNumber;
        currentNumber = "";
      }
    }
    operator = button.innerText;
  });
});
// Equal function
equalBtn.addEventListener("click", () => {
  if (currentNumber === "" || operator === "" || previousNumber === "")return;
  result = calculate(previousNumber, currentNumber, operator);
  updateDisplay(result);
  previousNumber = result;
  currentNumber = "";
  operator = "";
});
// Calculate function
function calculate(num1, num2, operator){
  const n1 = parseFloat(num1);
  const n2 = parseFloat(num2);
  switch(operator){
    case "+":
      return (n1 + n2).toString();
    case "-":
      return (n1 - n2).toString();
    case "X":
      return (n1 * n2).toString();
    case "/":
      return (n1 / n2).toString();
    default:
      return num2;
  };
};