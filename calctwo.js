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
const display = document.querySelector('.lowerScreen');
const upperDisplay = document.querySelector('.upperScreen');
const equals = document.querySelector('.equals');
const power = document.querySelector('.power');
const numberButtons = document.querySelectorAll('.number');
const funcButtons = document.querySelectorAll('.func');
const allButtons = document.querySelectorAll('.button');
const deleteButton = document.querySelector('.delete');
const wholeCalculator = document.querySelector('.background'); 

function addFunc(num1, num2) {
    return +num1 + +num2;
};

function subtractFunc(num1, num2) {
    return +num1 - +num2;
};

function multiplyFunc(num1, num2) {
    return +num1 * +num2;
}; 

function divideFunc(num1, num2) {
    return +num1 / +num2;
    //need to limit amount of decimal places
};

function clearData(divToBeCleared) {
    divToBeCleared.firstChild.data = '';
    screenNumber = '';
};

var screenNumber = '';
var firstNum = '';
var secondNum = '';
var operation = '';

function typeNum (button) {
    if (upperDisplay.innerText.split(' ').length == 3) {
        clearScreen();
    }
    let buttonNum = button.innerText;
    screenNumber = screenNumber.concat(buttonNum)
    display.firstChild.data = screenNumber;
    console.log(buttonNum);
};

function typeSymbol (button) {
    let buttonVal = button.getAttribute('id');
    operation = buttonVal;
    /*let inputNumber = screenNumber;
    myEquation.push(inputNumber);
    myEquation.push(buttonVal);*/
    upperDisplay.innerText = '|';
    firstNum = display.innerText;
    screenNumber = firstNum.concat(' ' + buttonVal + ' ');
    upperDisplay.firstChild.data = screenNumber;
    //screenNumber = '';
    clearData(display);
    console.log(buttonVal);

};

function equalsFunc (operation) {
    
    
    if ((upperDisplay.innerText.split(' ').length == 3) || 
    upperDisplay.innerText.split(' ').length == 1 ) {

            //upperDisplay.innerText = " ";
            //display.innerText = " ";
            // clearScreen();

        clearData(upperDisplay);
        upperDisplay.innerText = display.innerText;
        return 1;
    }
    let answer = 123;

    /*if (!isNaN(display.innerText.slice(0, 1))) {
        display.innerText.slice(0, 1);
    }*/
    secondNum = display.firstChild.data;
    console.log(secondNum);
    if (operation === '*') {
        answer = multiplyFunc(firstNum, secondNum);
    }
    if (operation === '/') {
        answer = divideFunc(firstNum, secondNum);
    }
    if (operation === '+') {
        answer = addFunc(firstNum, secondNum);
    }
    if (operation === '-') {
        answer = subtractFunc(firstNum, secondNum);
    }

    if (!Number.isInteger(answer)) {
        answer = answer.toFixed(10);
    }
    
    upperDisplay.firstChild.data = upperDisplay.firstChild.data.concat(secondNum);
    display.innerText = answer;
    screenNumber = String(answer);
    console.log(answer);
    //clear both screen
    //display answer
};

function clearScreen() {
    upperDisplay.innerText = ' ';
    display.innerText = ' ';
    screenNumber = "";
    firstNum = "";
    secondNUm = "";
    operation = "";
    answer = null;
}

function deleteNumber () {

    display.innerText = display.innerText.slice(0, -1);

    if (display.innerText.length == 0) {
        display.innerText = " ";
    }
    screenNumber = display.innerText;
}

function powerToggle () {
    const screenContainer = document.querySelector('.screenContainer');
    const buttonContainer = document.querySelector('.buttonGrid');
    const bottomContainer = document.querySelector('.bottomContainer');

    screenContainer.classList.toggle('toggle');
    screenContainer.classList.toggle('off');
    buttonContainer.classList.toggle('toggle');
    clear.classList.toggle('toggle');
    deleteButton.classList.toggle('toggle');
    equals.classList.toggle('toggle');
    clear.classList.toggle('toggle');

    clearScreen();

}

//wholeCalculator.classList.add('outoforder');
//allButtons.forEach((item) => {item.classList.add('toggle');});


//power.classList.remove('toggle');
power.addEventListener('click', powerToggle);

numberButtons.forEach(item => item.addEventListener('click', function () {
    typeNum(item);
}));

funcButtons.forEach(item => item.addEventListener('click', function () {
    typeSymbol(item);
}));

equals.addEventListener('click', function () {
    equalsFunc(operation);
});

clear.addEventListener('click', clearScreen);
deleteButton.addEventListener('click', deleteNumber);