//console.log("Hello World");
//let myName = prompt("Enter your name:");

//document.write(`<h1> ${myName}</h1>`);


//A function that receives a value, which is the temperature in Celsius, and displays the temperature in Fahrenheit
function convertToFahrenheit(){
    let temperature = Number(prompt("Enter the temperature in Celsius:"));
    let fahrenheit = (temperature * 9/5) + 32;
    document.getElementById("results").innerHTML = `<p>Temperature in Celsius: ${temperature}</p> <br> <p>Temperature in Fahrenheit: ${fahrenheit}</p>`;
}


/*
function subtraction(){
    let num1 = Number(prompt("Enter a number:"));
    let num2 = Number(prompt("Enter another number:"));
    let substraction = num1 - num2;
    //document.write(`<h1> The substraction of ${num1} minus ${num2} is:  ${substraction}</h1>`);
    //document.write(substraction);
    document.getElementById("results").innerHTML = `<p> The substraction of ${num1} minus ${num2} is:  ${substraction}</p>`;
}

function sum(){
    let num1 = Number(prompt("Enter a number:"));
    let num2 = Number(prompt("Enter another number:"));
    let sum = num1 + num2;
    document.getElementById("results").innerHTML = `<p> The substraction of ${num1} + ${num2} is:  ${sum}</p>`;
}*/

//a function that asks the user from prompt two numbers and display de sum of them, converting them to integers
/*function sum(){
    let num1 = prompt("Enter a number:");
    let num2 = prompt("Enter another number:");
    let sum = parseInt(num1) + parseInt(num2);
    document.write(`<h1> ${sum}</h1>`);
}*/

//It concatenates the numbers instead of adding them
/*function sum(){
    let num1 = prompt("Enter a number:");
    let num2 = prompt("Enter another number:");
    let sum = num1 + num2;
    document.write(`<h1> ${sum}</h1>`);
}*/


//Run the function
//sum();