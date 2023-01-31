function start() {
    // follow the directions in the comments
    // print to the index page

    // print your name to the name heading
    document.getElementById("name").innerHTML = "Your Name here";

    // from JavaScript Strings: https://www.w3schools.com/js/js_strings.asp
    let myName = "Devin";
    document.getElementById('name').innerHTML = myName;


    // String length: calculate the string length and print to the length paragraph
    let myString = "Be it ever so humble, there is no place like home.";
    let length = myString.length;
    document.getElementById('length').innerHTML = length;


    // Escape sequences
    // print a string to the escape paragraph that uses three different escape sequences (look at the web page)
    escapedString = "in the far far future of \"1984\" the planet came under attack by the \tINDIPENDENT PLANETARY EXCURSION FORCE\t They came with a vengence, they wanted to take back what was rightfully theirs, \'Bacon\'";
    document.getElementById('escape').innerHTML = escapedString;


    // JavaScript String Methods https://www.w3schools.com/js/js_string_methods.asp

    // create a variable named 'name' and store your complete name in it
    // Use the JavaScript slice function to display your first name to first paragraph
    let fullName = "Devin Anthony Grischow";
    let firstName = fullName.slice(0,5);
    document.getElementById('first').innerHTML = firstName;


    // Use the Javascript substring Method to display your middle name to the middle paragraph
    let middleName = fullName.slice(6,13);
    document.getElementById('middle').innerHTML = middleName


    // Use the JavaScript subst Method to display your last name to the last paragraph
    //slice doesent need a ending point, if none is given it grabs the whole string starting from the point given
    let lastName = fullName.slice(14)
    document.getElementById('last').innerHTML = lastName



    // replacing string content - in the following variable use the replace method to put your major 
    // in a new string and print to the major paragraph

    let major = "I'm majoring in Physical Therapy at McHenry County College";
    let myMajor = major.replace("Physical Therapy", "Mobile App Design and Computer Science")
    document.getElementById('major').innerHTML = myMajor


    // convert the following variable to upper case then print to the upper paragraph
    let myText = "It\'s a great day to be alive!"
    let capitalText = myText.toUpperCase()
    document.getElementById('upper').innerHTML = capitalText

    // Use the trim() method to remove white spaces from the following variable and print to the
    // trim paragraph
    let trimText = "                  McHenry County College                "
    let trimmedText = trimText.trim()
    document.getElementById('trim').innerHTML = trimmedText

    // use the indexOf() method to get the index of 'May' and print the index number to the index paragraph

    let months = "January, February, March, April, May, June, July, August, September, October, November, December"
    let may = months.indexOf('May')
    document.getElementById('index').innerHTML = may


    // JavaScript Template Literals   https://www.w3schools.com/js/js_string_templates.asp

    // create a template literals for both your first and last name (name the variables first and last)
    let first = "Devin"
    let last = "Grischow"


    // Use Variable substitutions to create a greeting that incorporates your first and last name and 
    // print to the greeting paragraph
    let welcomeText = `Welcome ${first} ${last}!`
    document.getElementById('greeting').innerHTML = welcomeText
}