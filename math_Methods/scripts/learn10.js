function start() {
    // Math: https://www.w3schools.com/js/js_math.asp
    // Demonstrate the use of round, ceil, floor, trunc, sign
    // pow, min, and random and display to the appropriate paragraphs
    document.getElementById('round').innerHTML = Math.round(3.0945);
    document.getElementById('ceil').innerHTML = Math.ceil(7.64732);
    document.getElementById('floor').innerHTML = Math.floor(5.8678);
    document.getElementById('trunc').innerHTML = Math.trunc(476.09145);
    document.getElementById('sign').innerHTML = Math.sign(-5);
    document.getElementById('pow').innerHTML = Math.pow(3, 17);
    document.getElementById('min').innerHTML = Math.min(04, 56, 2001, 0.543, 0.095, 0.1, 8000);
    const randomNum = Math.random()
    document.getElementById('random').innerHTML = randomNum;






    // Random: https://www.w3schools.com/js/js_random.asp
    // create a random integer between 1 and 100 and display in the random2 paragraph
    var couldBeOneHundread = Math.floor(Math.random() * 101);
    document.getElementById('random2').innerHTML = couldBeOneHundread;


    

    



    // Booleans: https://www.w3schools.com/js/js_booleans.asp
    // read the reference


    // Comparisons: https://www.w3schools.com/js/js_comparisons.asp
    // demonstrate and explain the difference between == and === in the
    // comparisons paragraph
    var x = true;
    var y = new Boolean(true);
    document.getElementById("comparisons").innerHTML = (x == y) + '<br>';
    document.getElementById("comparisons").innerHTML += (x === y) + '<br>';
    x = false;
    document.getElementById("comparisons").innerHTML += (x == y) + '<br>';
    document.getElementById("comparisons").innerHTML += (x === y) + '<br>';
    y = new Boolean(false);;
    console.log(x);
    console.log(y);

    document.getElementById("comparisons").innerHTML += (x == y) + '<br>';
    document.getElementById("comparisons").innerHTML += (x === y) + '<br>';
    document.getElementById("comparisons").innerHTML += "the == comppares if the two items are similar, but they can differ in type. For example in all the above lines, the X value is just created as true, but the Y is declared with the javascript Boolean Type. When you compare them with == since they both have values of true it returns True. But when using ===, it checks if both of the items are EQUAL TO each other, meaning they have to be the EXACT same type, and value. Thats why right under It its false. The next 2 are both false becasue they both have differing values. and finally the bottom two follow the same reasoning as the top. both are false but one is a boolean type."

    // Conditions: https://www.w3schools.com/js/js_if_else.asp
    // Read the conditions page
    if (couldBeOneHundread > 26){
        document.getElementById("conditions").innerHTML = "The Value is Higher than 26";
    }else{
        document.getElementById("conditions").innerHTML = "The Value IS lower than 26";

    }
}