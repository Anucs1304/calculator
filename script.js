function add(a,b){
    return a + b;
}

function substract(a, b){
    return a-b;
}

function multiply(a, b){
    return a *b;
}

function divide(a, b){
    if (b === 0) return "Error";
    return a /b;
}

function operate(operator, a, b){
    a = Number(a);
    b = Number(b);

    switch (operator){
        case "+": return add(a, b);
        case "-": return substract(a, b);
        case "*": return multiply(a, b);
        case "/": return divide(a, b);
        default: return null;
    }
}

let firstNumber = "";
let secondNumber = "";
let currentOperator = null;
let shouldResetDisplay = false;

const display = document.getElementById("display");

function appendDigit(digit){
    if(display.textContent === "0" || shouldResetDisplay){
        display.textContent = digit;
        shouldResetDisplay = false;
    } else{
        display.textContent += digit;
    }
}

document.querySelectorAll(".digit").forEach(btn =>{
    btn.addEventListener("click", () => appendDigit(btn.textContent));
});

function setOperator(op){
    if(currentOperator !== null && !shouldResetDisplay){
        secondNumber = display.textContent;
        const result = operate(currentOperator, firstNumber, secondNumber);
        display.textContent = round(result);
        firstNumber = result;
    } else {
        firstNumber = display.textContent;
    }

    currentOperator = op;
    shouldResetDisplay = true;
}

document.querySelectorAll(".operator").forEach(btn =>{
    btn.addEventListener("click", () => setOperator(btn.textContent));
});

document.getElementById("equals").addEventListener("click", () => {
    if(currentOperator === null) return;

    secondNumber = display.textContent;
    const result = operate(currentOperator, firstNumber, secondNumber);
    display.textContent = round(result);

    firstNumber = result;
    currentOperator = null;
    shouldResetDisplay = true;
});

document.getElementById("clear").addEventListener("click", () => {
    firstNumber ="";
    secondNumber ="";
    currentOperator = null;
    display.textContent = "0";
});

function round(num){
    if(typeof num == "string") return num;
    return Math.round(num * 1000) / 1000;
}