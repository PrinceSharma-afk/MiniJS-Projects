function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) {
        return "Error"; 
    }
    return a / b;
}
let operator,num1,num2;
function operate(operator, num1, num2) {
    switch (operator) {
        case '+':
            return add(num1, num2);
        case '-':
            return subtract(num1, num2);
        case '*':
            return multiply(num1, num2);
        case '/':
            return divide(num1, num2);
        default:
            return null;
    }
}
let firstNumber = "";
let secondNumber = "";
let currentOperator = null;
let shouldResetDisplay = false;

const display = document.getElementById("display");
const numberButtons = document.querySelectorAll(".number");
const operatorButtons = document.querySelectorAll(".operator");
const equalButton = document.getElementById("equal");
const clearButton = document.getElementById("clear");
const decimalButton = document.getElementById("decimal");
const backspaceButton = document.getElementById("backspace");
numberButtons.forEach(button => {
    button.addEventListener("click", () => {
        appendNumber(button.dataset.num);
    });
});
operatorButtons.forEach(button =>{
    button.addEventListener("click", () => {
        setOperator(button.dataset.op);
    });
});
equalButton.addEventListener("click", evaluate);
clearButton.addEventListener("click", clear);
decimalButton.addEventListener("click", appendDecimal);
backspaceButton.addEventListener("click",backspace);
function appendNumber(num){
    if (display.textContent === "0" || shouldResetDisplay) {
        resetDisplay();
    } 
    prev=display.textContent;
    display.textContent += num;
}
function appendDecimal() {
    if (display.textContent.includes(".")) return;
    display.textContent += ".";
}

function resetDisplay() {
    display.textContent = "";
    shouldResetDisplay = false;
}
function setOperator(operator){
if (currentOperator !== null) evaluate(); 
firstNumber= display.textContent;
currentOperator = operator;
display.textContent+=operator;
shouldResetDisplay = true; 
}
function evaluate(){
if (currentOperator === null || shouldResetDisplay) return;
secondNumber = display.textContent;  
display.textContent = roundResult(
    operate(currentOperator, parseFloat(firstNumber), parseFloat(secondNumber))
);
currentOperator = null;
}
function roundResult(num) {
    return Math.round(num * 1000) / 1000; 
}

function clear() {
    display.textContent = "0";
    firstNumber = "";
    secondNumber = "";
    currentOperator = null;
}
function backspace() {
    if (display.textContent.length === 1) {
        display.textContent= 0;
    } else {
        display.textContent = display.textContent.slice(0, -1);
    }
    const lastChar = display.textContent[display.textContent.length - 1];
    if (lastChar === "+" || lastChar === "-" || lastChar === "*" || lastChar === "/") {
        currentOperator = lastChar; 
    } 
}
window.addEventListener("keydown", handleKeyboardInput);

function handleKeyboardInput(event) {
    if (event.key >= 0 && event.key <= 9) appendNumber(event.key);
    if (event.key === ".") appendDecimal();
    if (event.key === "=" || event.key === "Enter") evaluate();
    if (event.key === "Backspace") backspace();
    if (event.key === "Escape") clear();
    if (["+", "-", "*", "/"].includes(event.key)) setOperator(event.key);

}