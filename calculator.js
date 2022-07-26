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

//try and make it work if you keep clicking on stuff

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
    screenNumber = '';
    display.innerText = screenNumber;
    //need to clear the old evaluation array as well
};

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
}

function evaluateArray (equationArray) {
    //check for division by zero
    //check for equation ending in *+-/
    //check for equation starting on */

    //if array is less than or equal to 2, thats the answer
    equationArray.push("")
    equationArray.push("")
    equationArray.push("")
    if (!isNaN(equationArray[1])) {
        console.log(equationArray + "done with function");
        display.innerText = equationArray[0];
        let ans = String(equationArray[0]);
        return ans;
        
    }

    for (let i = 0; i < equationArray.length; i++) {
        if (equationArray[i] === '*') {
            let answer = multiplyFunc(equationArray[i -1], equationArray[i +1]);
            console.log(answer);
            equationArray.splice(i+2, 0, answer);
            equationArray.splice(i-1, 3);
            console.log(equationArray);
            evaluateArray(equationArray);
        }
        else if (equationArray[i] === '/') {
            let answer = divideFunc(equationArray[i -1], equationArray[i +1]);
            console.log(answer);
            equationArray.splice(i+2, 0, answer);
            equationArray.splice(i-1, 3);
            console.log(equationArray);
            evaluateArray(equationArray);
        }
        else if (equationArray[i] === '+') {
            /*if ("*" in equationArray) {
                console.log("theres a multiply")
                continue;
            }*/
            let answer = addFunc(equationArray[i -1], equationArray[i +1]);
            console.log(answer);
            equationArray.splice(i+2, 0, answer);
            equationArray.splice(i-1, 3);
            console.log(equationArray);
            evaluateArray(equationArray);
        }
        else if (equationArray[i] === '-') {
            let answer = subtractFunc(equationArray[i -1], equationArray[i +1]);
            console.log(answer);
            equationArray.splice(i+2, 0, answer);
            equationArray.splice(i-1, 3);
            console.log(equationArray);
            evaluateArray(equationArray);
        }
    // make this recursive so it keeps looking for simple equations
    //solves them and returns the answer
    }
}




numberButtons.forEach(item => item.addEventListener('click', function () {
    typeNum(item);
}));

funcButtons.forEach(item => item.addEventListener('click', function () {
    typeSymbol(item);
}));

equals.addEventListener('click', function () {
    screenNumber = evaluateArray(screenToArray(screenNumber));
    
});

clear.addEventListener('click', clearScreen);

// Recursively solve the equation typed in?


/*const allButtons = querySelectorAll('.button');
allButtons.forEach(item => item.addEventListener('click', function () {
    item.style.transform = "translateY(5px);";
}));*/