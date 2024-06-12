
function add (a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtract (a, b) {
    return parseFloat(a) - parseFloat(b);
}

function multiply (a, b) {
    return parseFloat(a) * parseFloat(b);
}

function divide (a, b) {
    return parseFloat(a) / parseFloat(b);
}

let currentOperation = {
    firstNumber: "",
    operation: "",
    secondNumber: "",
}
let currentNumber ="";

let storedDisplay = document.querySelector("#stored");
let currentDisplay = document.querySelector("#current");
let acButton = document.querySelector("#ac");
let delButton = document.querySelector("#del");
let divideButton = document.querySelector("#divide");
let sevenButton = document.querySelector("#seven");
let eightButton = document.querySelector("#eight");
let nineButton = document.querySelector("#nine");
let multiplyButton = document.querySelector("#multiply");
let fourButton = document.querySelector("#four");
let fiveButton = document.querySelector("#five");
let sixButton = document.querySelector("#six");
let subtractButton = document.querySelector("#subtract");
let oneButton = document.querySelector("#one");
let twoButton = document.querySelector("#two");
let threeButton = document.querySelector("#three");
let addButton = document.querySelector("#add");
let zeroButton = document.querySelector("#zero");
let decimalButton = document.querySelector("#decimal");
let equalsButton = document.querySelector("#equals");

let allButtons = document.querySelectorAll(".btn");

document.addEventListener('keydown', (e) => {
    const keyMap = {
        'Enter': equalsButton,
        '=': equalsButton,
        'Backspace': delButton,
        'Escape': acButton,
        'Delete': acButton,
        '0': zeroButton,
        '1': oneButton,
        '2': twoButton,
        '3': threeButton,
        '4': fourButton,
        '5': fiveButton,
        '6': sixButton,
        '7': sevenButton,
        '8': eightButton,
        '9': nineButton,
        '+': addButton,
        '-': subtractButton,
        '*': multiplyButton,
        '/': divideButton,
        '.': decimalButton
    };

    if (keyMap[e.key]) {
        e.preventDefault();
        keyMap[e.key].click();
    }
});