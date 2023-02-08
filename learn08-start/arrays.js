function start() {

    /* Follow the directions in the comments to demonstrate the use of arrays */

    /* JavaScript Arrays:https://www.w3schools.com/js/js_arrays.asp */
    // write your name to the name h1
    document.getElementById('name').innerHTML = 'Devin Grischow'

    // Create an array called months that holds all the months of the year
    const months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    // use the index to print the month May from the months array the may paragraph
    let may = months[4]
    document.getElementById('may').innerHTML = may


    // print the length of the month array to the length paragraph
    let monthLength = months.length;
    document.getElementById('length').innerHTML = monthLength


    // Loop through all of the months array and print each month to the months paragraph
    months.forEach(month => {
        document.getElementById('months').innerHTML += month + '<br>';
        
    });
   

    //JS Array Methods:https://www.w3schools.com/js/js_array_methods.asp

    // convert the months array to a string and print to the string paragraph
    document.getElementById('string').innerHTML = "Here is a String of the Entire Array:\t" + months.toString()


    // create two new arrays - weekends and weekdays, add the appropriate days to each
    const weekends = ['Saturday', 'Sunday']; 
    const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday',];
    

    // join the two arrays into a new array - week
    var week = weekdays.concat(weekends)
    console.log(week)



    // print the contents of week to the week paragraph
    document.getElementById('week').innerHTML = week;


    // use the pop method to remove the last element of the week array, then print
    // the week array to the pop paragraph
    week.pop()
    document.getElementById('pop').innerHTML = week


    // use the push function to add two fruits to the array fruits print to the fruits paragraph
    fruits = ["Apple", "Kiwi", "Mango"]
    fruits.push("Orange", "GrapeFruit");
    document.getElementById('pop').innerHTML = fruits


    // use the shift function to add a fruit to the front of the list and print to the fruits2 paragraph
    fruits.shift()
    document.getElementById('fruits2').innerHTML = fruits;

    // JS Array Sort  https://www.w3schools.com/js/js_array_sort.asp

    languages = ["COBOL", "livescript", "C++", "Python", "JavaScript", "Lua", "Basic"];
        // sort the array languages and print to the paragraph sorted
    languages.sort();
    document.getElementById('sorted').innerHTML = languages;
    // reverse the array languages and print to the paragraph reversed
    languages.reverse()
    document.getElementById('reversed').innerHTML = languages;
    // use the compare function to sort the numbers  and print to the num-sorted paragraph
    numbers = [42, 23, 21, 50, 20, 6, 31, 9]
    let sortedNumbers = numbers.sort(function(a,b){return a - b});
    //the operation when returned determines how the list is sorted
    //- sorts it in lowest to highest
    //however + does not sort in high to low
    console.log(sortedNumbers);
    document.getElementById('num-sorted').innerHTML = sortedNumbers;

    // Read the Array Iteration page https://www.w3schools.com/js/js_array_iteration.asp 
    // read the Array Const page https://www.w3schools.com/js/js_array_const.asp
}