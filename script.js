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