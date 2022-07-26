const one = document.querySelector('#one');
const two = document.querySelector('#two');
const three = document.querySelector('#three');
const four = document.querySelector('#four');
const five = document.querySelector('#five');
const six = document.querySelector('#six');
const seven = document.querySelector('#seven');
const eight = document.querySelector('#eight');
const nine = document.querySelector('#nine');
const divide = document.querySelector('.divide');
const multiply = document.querySelector('.multiply');
const add = document.querySelector('.add');
const subtract = document.querySelector('.subtract');
const decimal = document.querySelector('.decimal');
const clear = document.querySelector('.clear');
const display = document.querySelector('.screen');
const equals = document.querySelector('.equals');
const power = document.querySelector('.power');

const numberButtons = document.querySelectorAll('.number');
const funcButtons = document.querySelectorAll('.func');

var screenNumber = '';
function typeNum (button) {
    let buttonNum = button.innerText;
    screenNumber = screenNumber.concat(buttonNum)
    display.innerText = screenNumber;
    console.log(buttonNum);
};

var myEquation = [];
function typeSymbol (button) {
    //TODO
    //Figure out how to get each number typed in and copy it to an array
    let buttonVal = button.getAttribute('id');
    /*let inputNumber = screenNumber;
    myEquation.push(inputNumber);
    myEquation.push(buttonVal);*/
    screenNumber = screenNumber.concat(' ' + buttonVal + ' ');
    display.innerText = screenNumber;
    console.log(buttonVal);
};

function screenToArray (screenString) {
    let equationArray = screenString.split(' ');
    console.log(equationArray);
    return equationArray;
    
};

function clearScreen () {
    screenNumber = ' ';
    display.innerText = screenNumber;
    //need to clear the old evaluation array as well
};

function addFunc(num1, num2) {
    return num1 + num2;
};

function subtractFunc(num1, num2) {
    return num1 - num2;
};

function multiplyFunc(num1, num2) {
    return num1 * num2;
}; 

function divideFunc(num1, num2) {
    return num1 / num2;
    //need to limit amount of decimal places
}

function evaluateArray (equationArray) {
    //check for division by zero
    //check for equation ending in *+-/
    //check for equation starting on */

    for (let i = 0; i < equationArray.length; i++) {
        if (equationArray[i] === '*') {
            let answer = multiplyFunc(equationArray[i -1], equationArray[i +1]);
            console.log(answer);
            equationArray.splice(i+2, 0, answer);
            equationArray.splice(i-1, 3);
            console.log(equationArray);
        }
        else if (equationArray[i] === '/') {
            
        }
        else if (equationArray[i] === '+') {
            
        }
        else if (equationArray[i] === '-') {
            
        }
    }
}

numberButtons.forEach(item => item.addEventListener('click', function () {
    typeNum(item);
}));

funcButtons.forEach(item => item.addEventListener('click', function () {
    typeSymbol(item);
}));

equals.addEventListener('click', function () {
    evaluateArray(screenToArray(screenNumber));
    
});

clear.addEventListener('click', clearScreen);

// Recursively solve the equation typed in?

