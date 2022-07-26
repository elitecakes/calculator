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

const numberButtons = document.querySelectorAll('.number');
const funcButtons = document.querySelectorAll('.func');

var screenNumber = '';
function typeNum (button) {
    let buttonNum = button.innerText;
    screenNumber = screenNumber.concat(buttonNum)
    display.innerText = screenNumber;
    console.log(buttonNum);
}

var myEquation = [];
function typeSymbol (button) {
    //TODO
    //Figure out how to get each number typed in and copy it to an array
    let buttonVal = button.getAttribute('id');
    let inputNumber = screenNumber;
    myEquation.push(inputNumber);
    myEquation.push(buttonVal);
    screenNumber = screenNumber.concat(' ' + buttonVal + ' ');
    display.innerText = screenNumber;
    console.log(buttonVal);
}

numberButtons.forEach(item => item.addEventListener('click', function () {
    typeNum(item);
}));

funcButtons.forEach(item => item.addEventListener('click', function () {
    typeSymbol(item);
}));

// Recursively solve the equation typed in?

