function start(){
    console.log("entered");



// for loop - https://www.w3schools.com/js/js_loop_for.asp
// Write 99 bottles of beer on the wall using a for loop
// hints - decrement at the end, create a variable, save the song lyrics from
// the loop to the variable. use <br> instead of \n with the inner html. 
    for (let beer = 99; beer > 0; beer--){
        document.getElementById("beer").innerHTML +=`${beer}, bottles of beer on the wall ${beer} bottles of beer!` + "<br>"
        document.getElementById("beer").innerHTML +=(`Ya take on down, pass it around, ${beer-1} bottles of beer on the wall`+ "<br>"+ "<br>")
        if (beer === 1){
            document.getElementById("beer").innerHTML +=("1 bottle of beer on the wall, 1 bottle of beer."+ "<br>")
            document.getElementById("beer").innerHTML +=("Take one down and pass it around, no more bottles of beer on the wall."+ "<br>"+ "<br>")
        }
        
    }






//for in: https://www.w3schools.com/js/js_loop_forin.asp
// create an array of months and use the for in
// command to print them to the for-in paragraph
    let months = ['January', "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    for (let month in months) {
        document.getElementById('for-in').innerHTML += months[month] + "<br>"

    }








// For of: https://www.w3schools.com/js/js_loop_forof.asp
// demonstrate the use of For Of to print letters from a string. 
// Create your own string variable of at least 5 letters
// print the results in the for-of paragraph
    let sampleString = "The Duck Watches Over All, to help all who program"
    for (let letter of sampleString){
        document.getElementById('for-of').innerHTML += letter + "<br>"
    }




// While loop: https://www.w3schools.com/js/js_loop_while.asp
// Create a while loop to print the numbers 1 to 50
// print the results in the while paragraph
    let count = 0;
    while(count < 50){
        count++;
        document.getElementById('while').innerHTML += count + "<br>"
    }
}