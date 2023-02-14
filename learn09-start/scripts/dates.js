/* JavaScript Dates: https://www.w3schools.com/js/js_dates.asp */

// Create a variable, assign it to a new date object
var dateObject = new Date();

// display the variable in the basic paragraph
document.getElementById('basic').innerHTML = dateObject;


// create a new date variable and load the information for today into it
// display the results in the today paragraph (Year, Month, Day)
var today = new Date("2023", "01", "13");
document.getElementById('today').innerHTML = today;



// Create a new date variable based on the dateString and store your birthday in it
// display the variable in the birthday paragraph
const myBirthday = new Date("October 11, 2002")
document.getElementById('birthday').innerHTML = myBirthday;



// Convert your basic date to the ISO string format and display the result
// in the iso paragraph
document.getElementById('iso').innerHTML = dateObject.toISOString();





//  Date Formats: https://www.w3schools.com/js/js_date_formats.asp
// Demonstrate 3 date formats of your choice to date1, date2, and date3 paragraphs
const date01 = new Date("04/12/2002"); //short date format
const date02 = new Date("2016-05-06"); //ISO 8601 Format
const date03 = new Date("may 2 1997"); //long date format
document.getElementById('date1').innerHTML = date01;
document.getElementById('date2').innerHTML = date02;
document.getElementById('date3').innerHTML = date03;





//  getDate() Methods: https://www.w3schools.com/js/js_date_methods.asp
// Demonstrate 4 get date methods of your choice to get1-get4 paragraphs
const birthYear = myBirthday.getFullYear();
document.getElementById('get1').innerHTML = birthYear;

const birthDayMilliseconds = myBirthday.getTime(); //milliseconds since my birthday! wow thats alot  
document.getElementById('get2').innerHTML = birthDayMilliseconds;

const joeyBday = new Date("June 30, 2004");
const joeyWeek = joeyBday.getDay();
document.getElementById('get3').innerHTML = joeyWeek;

const joeday = joeyBday.getDate();
document.getElementById('get4').innerHTML = joeday;







// set date methods: https://www.w3schools.com/js/js_date_methods_set.asp
// Demonstrate 4 set date methods of your choice to set1-set4 paragraphs
const theDate = new Date();

theDate.setFullYear(1905);
document.getElementById('set1').innerHTML = theDate;
theDate.setMilliseconds(7584);
document.getElementById('set2').innerHTML = theDate;
theDate.setHours(8);
document.getElementById('set3').innerHTML = theDate;
theDate.setDate(12);
document.getElementById('set4').innerHTML = theDate;
