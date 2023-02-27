/*
Iterables: https://www.w3schools.com/js/js_iterables.asp
Read the page
Demonstrate iteration of a list 
Create a list of movies, books, or games at least 5 items long and 
display them in the list paragraph
*/
let curentFavGames = ["God of War: Ragnarok", "The Callisto Protocol", "Dead Space Remake", "Atomic Heart","Team Fortress 2"]
for (let game of curentFavGames) {
    document.getElementById("list").innerHTML += game + "<br/>";
}




/*
JS Sets

https://www.w3schools.com/js/js_sets.asp

Create a set with at least 5 song titles in it
display the contents of the set in the set1 paragraph (use iteration)

*/

const coolSongs = new Set(["SuperHero", "Night Runnin", "The Invisibles", "Gotta Lotta", "Have a Nice Day"])
for (const song of coolSongs) {
    document.getElementById("set1").innerHTML += song + "<br/>";
}

// add two more songs to the set then display in the set2 paragraph
coolSongs.add("10's");
coolSongs.add("Bulls on Parade");
for (const song of coolSongs) {
    document.getElementById("set2").innerHTML += song + "<br/>";
}






/* 
Maps
https://www.w3schools.com/js/js_maps.asp

Maps are like dictionaries in python
Create a map with five names and emails in it.
Display the contents of the map in map1 use the forEach() method (bottom of
    the reference page)
*/
let users = new Map([
    ["Devin", "devinJump@gmail.com"],
    ["Joey", "JoeyJumpa@gmail.com"],
    ["Bob", "BobSagot@hollywood.com"],
    ["Grinch", "IstoleChristmas@hooville.com"],
    ["Dave", "DaveDuckMan@outlook.com"]
])

users.forEach (function(email, name) {
    document.getElementById("map1").innerHTML += "name: " + name + "<br/>" + "Email: " + email + "<br/>";
})


// add two new names and emails and display in map2 use the forEach() method
users.set("george", "jungleBookGeorge@gmail.com");
users.set("Don", "DonnyGG@gmail.com");
users.forEach (function(email, name) {
    document.getElementById("map2").innerHTML += "name: " + name + "<br/>" + "Email: " + email + "<br/>";
})


// get and display the email of one person, display in map3
document.getElementById("map3").innerHTML = users.get("Grinch");