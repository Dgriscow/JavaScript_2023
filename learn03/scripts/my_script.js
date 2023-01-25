// Global Variables
//  global variables are declared with var
//  local variables are declared wih let
//  
//


// myName = "Meredith Louise Engel" - Allowed but frowned upon

function names() {

    var name = "Devin";
    var firstName = "Devin",
    lastName = "Grischow";
    document.getElementById("name").innerHTML = name;
    document.getElementById("full-name").innerHTML = firstName + " " + lastName;
    var firstName = "Don";
    //var name = "Devin";
    document.getElementById("first").innerHTML = name;
    document.getElementById("nick-name").innerHTML = firstName;

}

function scope() {
    //fix the errors
    let firstName = "Devin", lastname = "Grischow"
    const taxRate = .07; // This is a constant
    document.getElementById("global").innerHTML = name;
    document.getElementById("local").innerHtml = firstName;
    document.getElementById("tax").innerHTML = taxRate;
    
    document.getElementById("new-tax").innerHTML = taxRate;
}

function letMe() {
    let dog1 = "Dash";
    dog2 = "Tea";

    var dog3 = "Ash";
    document.getElementById("dog1").innerHTML = dog1;
    document.getElementById("dog2").innerHTML = dog2;
    document.getElementById("dog3").innerHTML = dog3;
    var dog2 = "Molly"
    document.getElementById("dog1-2").innerHTML = dog2;
}

function constants() {
    // fix the errors
    const PI = 3.14;
    const dogs = ["Ollie", "Nessie", "Ory"];
    document.getElementById("doggos").innerHTML = dogs;
    dogs[0] = "Ollie Bear";
    document.getElementById("new-doggos").innerHTML = dogs;
    const breeds = ["Shepherd", "Collie", "Bouvier"];
    document.getElementById("pi").innerHTML = PI;
    document.getElementById("breeds").innerHTML = breeds;
    
}

function myMath() {
    // create statements demonstrating the use of each operator
    let addition = 93 + 275;
    document.getElementById("addition").innerHTML = "93 + 275 = " + addition;

    let subtraction = 458 - 87.4;
    document.getElementById("subtraction").innerHTML = "458 - 87.4 = " + subtraction;

    let multiplication = 0.54 * 636;
    document.getElementById("multiplication").innerHTML = "0.54 * 636 = " + multiplication;

    let exponent = 12 ** 6;
    document.getElementById("exponent").innerHTML = "12^6 = " + exponent;

    let division = 59/2;
    document.getElementById("division").innerHTML = "59 / 2 = " + division;

    let modulus = 70%8;
    document.getElementById("modulus").innerHTML = "70 % 8 = " + modulus;

    let increment = 4;
    increment++;
    document.getElementById("increment").innerHTML = "4 ++ = " + increment;

    let decrement = 9;
    decrement--;
    document.getElementById("decrement").innerHTML = "9-- = " + decrement;
    
    
}


function assignments() {
    // create statements demonstrating the use of each assignment type
    x = 10
    document.getElementById("equals").innerHTML = "x = " + x;
    x += 5;
    document.getElementById("plus-equals").innerHTML = "x += 5 " + "x = " + x;
    x -= 5
    document.getElementById("minus-equals").innerHTML = "x-= 5 " + "x = " + x;
    x *= 5
    document.getElementById("times-equals").innerHTML = "x *= 5 " + "x = " + x;
    x /= 5
    document.getElementById("divide-equals").innerHTML = "x /= 5 " + "x = " + x;
    x %= 5
    document.getElementById("modulus-equals").innerHTML = "x %= 5 " + "x = " + x;
}

function dataTypes() {
    // create samples of each of the data types from the
    // index page and display them in the Data Types section
    const cars = ['Benz', 'Lambo', 'Ford', 'Chevy'];
    document.getElementById("array").innerHTML = cars;

    const carSpecs = {make:cars[0], year:23, miles:89000, condition:"Good"};
    document.getElementById("object").innerHTML = carSpecs

}
