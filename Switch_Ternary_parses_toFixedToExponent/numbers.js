function start() {

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Devin Grischow"
        /*
            read/watch the associated reference and complete the directions in the comments.

        */

    /* JS Numbers: https://www.w3schools.com/js/js_numbers.asp
        We will focus on the things with numbers that are significantly
        different than python. Please read the page linked to above before 
        completing the following:
    */

    /* Write a line of code demonstrating what will happen if 
       you try to add a number and a string. Print to the add paragraph to 
       display both the equation and the results. 
    */
   const sampleString = 'This will appear weird'
   const errorNum = 404

   let numPlusString = errorNum + sampleString
   document.getElementById('add').innerHTML = sampleString
   document.getElementById('add').innerHTML += "\n"
   document.getElementById('add').innerHTML += errorNum
   document.getElementById('add').innerHTML += '\n'
   
   document.getElementById('add').innerHTML += numPlusString



    /*
        JS Number Methods: https://www.w3schools.com/js/js_number_methods.asp
    */

    // Demonstrate the use of toString() and print to the to-string paragraph
    
    document.getElementById('to-string').innerHTML = `Here Is a number integer:\t\t` 
    document.getElementById('to-string').innerHTML += errorNum
    document.getElementById('to-string').innerHTML += `\t\tHere Is a number turned into a string:\t\t`
    document.getElementById('to-string').innerHTML += errorNum.toString()

    // Demonstrate the use of toExponential() and print to the exponent paragraph
    const exponentialNumber = 842.74929749474587938
    document.getElementById('exponent').innerHTML = exponentialNumber.toExponential(2) + `  To The Second <br>` +
    exponentialNumber.toExponential(3) + '  To the Third <br>' + exponentialNumber.toExponential() + '    no value given<br>' 




    // Demonstrate the use of toFixed() and print to the fixed paragraph
    const extravagantNumber = 32.78304623
    document.getElementById('fixed').innerHTML = extravagantNumber.toFixed() + '    default parameter<br>' + extravagantNumber.toFixed(1) + '   to first <br>' + 
    extravagantNumber.toFixed(4) + '    to the fourth<br>' + extravagantNumber.toFixed(2)


    // Demonstrate the use of toPrecision() and print to the precision paragraph
    const evenMoreComplexNumber = 345.892
    document.getElementById('precision').innerHTML = evenMoreComplexNumber.toPrecision(2) + '   The first 2 numbers<br>' + evenMoreComplexNumber.toPrecision(4) + ' To the fourth number<br>' + evenMoreComplexNumber.toPrecision(6) + '    To the Sixth Spot<br>'
    + evenMoreComplexNumber.toPrecision() + "   No Parameters Given"


    // Demonstrate the use of parseFloat() and print to the float paragraph
    document.getElementById('float').innerHTML = parseFloat('40') + '<br>' + parseFloat('6      0     ') + '<br>' +
    parseFloat('        404      ') + '<br>' + parseFloat(sampleString) +'<br>'+ parseFloat('300 entries')


    // Demonstrate the use of parseInt() and print to the int paragraph
    document.getElementById('int').innerHTML = parseInt('-50') + '<br>' + parseInt('20') + '<br>'
    + parseInt('20.081') + '<br>' + parseInt('-37.091') + '<br>' + parseInt('its -30.43') + '<br>'
    + parseInt('-49.091 is the answer') + '<br>'



    // Watch Simple Comparisons: https://www.linkedin.com/learning/learning-the-javascript-language-2/simple-comparisons?autoplay=true&resume=false&u=69317474

    /* In the equals paragraph explain your understanding of the difference between using == and ===  (You will probably
    need to do an additional web search to really get it.)
    */
   document.getElementById('equals').innerHTML = "a === is what is referred to as a strict eqauality, while == is just a equality checker in javascript" + '<br>' +
   'Javascript is what is referred to as a dynamically typed language, which means the variables change depending on what they are at runtime, and can change during compliation' + '<br>' +
   'Javascript is a unique language, if you try adding a number and string, they concatinate into a string, in most languages the program will just refuse to run, but javascript attempts to handle these situations' + '<br>' +
   'same goes for testing operators, when you test with just ==,tests just the similarity, so if you have 1 == \'1\'and you test them, javascript will say this is true, even though one is a string and the other is a number, Javascript is just reading everything as a string, which in some cases you really dont want' + '<br>' +
   'when you use === its called a strict equality, and it EXACTLY tests if something is squal to something, or if you use !== if something is NOT equal to something. the === is like the == in other languages'

    // Watch Arithmetic Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/arithmetic-operators?autoplay=true&resume=false&u=69317474
    // Watch Logical Operators: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // In the logic paragraph describe the order of precedence for and / or operators
    document.getElementById('logic').innerHTML = 'In javascript the ands are chekced before the ors. so in a long line of ands and ors the ands are run first, and compared to the other ors'


    // Watch Conditional If: https://www.linkedin.com/learning/learning-the-javascript-language-2/logical-operators?autoplay=true&resume=false&u=69317474
    // Watch Conditionals Switch: https://www.linkedin.com/learning/learning-the-javascript-language-2/conditionals-switch?autoplay=true&resume=false&u=69317474


    // Write code to demonstrate the use of the switch statement and display results to switch paragrah
    var userInput = window.prompt('What meal are you hungry for? Breakfast Lunch Or Dinner?')
    userInput = userInput.toLowerCase()
    switch (userInput){
        case 'lunch':
            document.getElementById('switch').innerHTML='Have a Sandwhich!';
            break;
        case 'breakfast':
            document.getElementById('switch').innerHTML="Have a omlette!";
            break;
        case 'dinner':
            document.getElementById('switch').innerHTML="Have a Corn Dog!";
            break;
        default:
            document.getElementById('switch').innerHTML="You entered something different, clearly you dont want to eat"
            break;
    }




    // Watch Terse ifs: https://www.linkedin.com/learning/learning-the-javascript-language-2/terse-ifs?autoAdvance=true&autoSkip=true&autoplay=true&resume=false&u=69317474
    // Watch Ternary Operator:https://www.linkedin.com/learning/learning-the-javascript-language-2/ternary-operator?autoplay=true&resume=false&u=69317474
    // Write code to demonstrate the use of the ternary operator and print to the ternary paragraph
    userInput === 'dinner'
        ? document.getElementById('ternary').innerHTML = 'A Corndog is kind of bland by itself, maybe try dipping it in some sauce?'
        : document.getElementById('ternary').innerHTML = 'Enjoy your Meal, Refresh the page to try ordering something else!'

}