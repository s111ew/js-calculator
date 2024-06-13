function add(a, b) {
    return parseFloat(a) + parseFloat(b);
}

function subtract(a, b) {
    return parseFloat(a) - parseFloat(b);
}

function multiply(a, b) {
    return parseFloat(a) * parseFloat(b);
}

function divide(a, b) {
    if (b == 0) {return "Error"}
    return parseFloat(a) / parseFloat(b);
}

function operate(numFirst, operand, numSecond) {
    switch (operand) {
        case "multiply":
            return formatResult(multiply(numFirst, numSecond));
        case "divide":
            return formatResult(divide(numFirst, numSecond));
        case "add":
            return formatResult(add(numFirst, numSecond));
        case "subtract":
            return formatResult(subtract(numFirst, numSecond));
        default:
            return "Error";
    }
}

function formatResult(result) {
    result = result.toString();
    if (result.includes('.')) {
        if (result.length > 9) {
            result = parseFloat(result).toPrecision(9).toString();
            if (result.length > 9) result = result.slice(0, 9);
        }
    } else {
        if (result.length > 9) result = "Too Big!"
    }
    return result;
}

let firstNumber = "";
let operation = "";
let secondNumber = "";

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

allButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        if (btn.id === "ac") {
            currentDisplay.textContent = "";
            storedDisplay.textContent = "";
            firstNumber = "";
            secondNumber = "";
            operation = "";
        } else if (btn.id === "del") {
            if(currentDisplay.textContent === "Error" || currentDisplay.textContent === "Too Big!") {
                currentDisplay.textContent = "";
            }
            currentDisplay.textContent = currentDisplay.textContent.slice(0, -1);
        } else if (btn.id === "divide" || btn.id === "multiply" || btn.id === "add" || btn.id === "subtract") {
            if(currentDisplay.textContent === "Error" || currentDisplay.textContent === "Too Big!") {
                currentDisplay.textContent = "";
            }
            if (currentDisplay.textContent && !operation) {
                operation = btn.id;
                firstNumber = currentDisplay.textContent;
                storedDisplay.textContent = firstNumber + " " + btn.textContent;
                currentDisplay.textContent = "";
            }
        } else if (btn.id === "equals") {
            if(currentDisplay.textContent === "Error" || currentDisplay.textContent === "Too Big!") {
                currentDisplay.textContent = "";
            }
            if (operation && currentDisplay.textContent) {
                secondNumber = currentDisplay.textContent;
                currentDisplay.textContent = operate(firstNumber, operation, secondNumber);
                storedDisplay.textContent = "";
                firstNumber = currentDisplay.textContent;
                secondNumber = "";
                operation = "";
            }
        } else if (btn.id === "decimal") {
            if(currentDisplay.textContent === "Error" || currentDisplay.textContent === "Too Big!") {
                currentDisplay.textContent = "";
            }
            if (!currentDisplay.textContent.includes(".")) {
                if (currentDisplay.textContent === "") {
                    currentDisplay.textContent = "0"
                }
                currentDisplay.textContent += btn.textContent;
            }
        } else {
            if(currentDisplay.textContent === "Error" || currentDisplay.textContent === "Too Big!") {
                currentDisplay.textContent = "";
            }
            if (currentDisplay.textContent.length < 9) {
                currentDisplay.textContent += btn.textContent;
            }
        }
    });
});

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