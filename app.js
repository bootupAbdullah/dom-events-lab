/*-------------------------------- Constants --------------------------------*/
const buttons = document.querySelectorAll('.button');
const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display ')
const buttonNumber = document.querySelectorAll('.button number')
/*-------------------------------- Variables --------------------------------*/

// numbersList = [1,2,3,4,5,6,7,8,9]
// operatorList = [=]

let number = null
let number2 = null
let operator = ""
let result = 0

/*------------------------ Cached Element References ------------------------*/

console.dir(display)
console.dir(buttons)

/*----------------------------- Event Listeners -----------------------------*/
calculator.addEventListener('click', (event) => {
    // This log is for testing purposes to verify we're getting the correct value
    // You have to click a button to see this log
    console.log(event.target.innerText);
  
    // Example
    if (event.target.classList.contains('number')) {
      // Do something with a number
    }
  
    // Example
    if (event.target.innerText === '*') {
      // Do something with this operator
    }
  });
  
/*-------------------------------- Functions --------------------------------*/

// for (num in buttonNumber.va)

//attempting to create a function that handles button clicking
// const handleButtons = () => {
//     buttons.forEach((button) => {
//         button.addEventListener('click', (event) => {
//         display.innerText = button.innerText
//         console.log(event.target.innerText);
//         })
//     })    
// }
    


//display buttons that are pressed
buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
    display.innerText = button.innerText
    console.log(event.target.innerText);
    });
  });
  

// building operations functonality

// buttons.forEach((button) => {
//     button.addEventListener('click', (event) => {
//         if (event.target.classList.contains('number')) {
//             number = Number(button.innerText)
//         }

//         if (event.target.classList.contains('operator') && isNan(Number(button.innerText))) {
//             operator = button.innerText
//         }
//         switch(event.target.innerText) {
//             case "+":
//                 const addition = (number, number2) => {
//                     return number + number2
//                 }
//                 break;
//             case "-":
//                 //function subtract
//                 break;
//             case "/":
//                 //function divide
//                 break;
//             case "*":
//                 //function multiply
//                 break;
//         }   case "=":
                
// }

 
function calculate(number,number2, operator){
    console.log('we are in calculate function')
    switch(operator) {
        case "+":
           display.innerText =  number + number2;
           console.log(`this is the display.innerText : ${display.innerText}`)
           break;
        case "-":
            //function subtract
            break;
        case "/":
            //function divide
            break;
        case "*":
            //function multiply
            break;
    }

// building calculation functionality
buttons.forEach((button) => {
    console.log(`for each function`);
    button.addEventListener('click', (event) => {
        if (event.target.classList.contains('number') && number !== null) {
            number = Number(button.innerText)
            console.log(`number is ${number}`)
        }
         if(event.target.classList.contains('number') && number === null){
            number2 = Number(button.innerText)
            console.log(`number2 is ${number2}`)

        }
        if (event.target.classList.contains('operator')) {
             operator = button.innerText
             console.log(`operator is ${operator}`)
        }
        if (operator === "=") {
            calculate(number,number2, operator);
        }
    })
})

console.log(result)


}


//workig functionality for button usage from DOM tutorial

//   commentButtonElement.addEventListener('click', ()=> {
//     if(inputElement.value != "" ) {
//     const commentElement = document.createElement('li');
//     commentElement.textContent = inputElement.value
//     commentListElement.appendChild(commentElement);
//     inputElement.value = "";
// }   
