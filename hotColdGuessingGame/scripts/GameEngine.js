const answer = Math.floor(Math.random() * 1001);
//answer is a global variable so the function can be called and not reset the generated number every time
console.log(answer)


function guess(){
    
    var guess = document.getElementById('guess').value;

    





    //if guess is correct
    if (guess == answer){
        document.getElementById("guessColorF").style.backgroundColor = "green";
        document.getElementById("guessColor").style.backgroundColor = "green";
        
        document.getElementById("currGuess").innerHTML= "You Guessed The Right Number! Refresh The Page To Play Again"
    }else {




     
        if (guess > answer){
            document.getElementById("currGuess").innerHTML= "Cold"
            document.getElementById("guessColorF").style.backgroundColor = "lightskyblue";
            document.getElementById("guessColor").style.backgroundColor = "lightskyblue";

        }
        else if (guess > (answer/1.15)){
            document.getElementById("guessColorF").style.backgroundColor = "red";
            document.getElementById("guessColor").style.backgroundColor = "red";
            document.getElementById("currGuess").innerHTML= "On Fire"

        }else if (guess > (answer/2)){ //if your guess is over half of the answer
            //the bigger the decimal, the farther from the answer
            document.getElementById("guessColorF").style.backgroundColor = "maroon";
            document.getElementById("guessColor").style.backgroundColor = "maroon";
            document.getElementById("currGuess").innerHTML= "Hot"
            

        }else if (guess > (answer/3)){ //if your guess is over half of the answer
            //the bigger the decimal, the farther from the answer
            document.getElementById("guessColorF").style.backgroundColor = "#920028";
            document.getElementById("guessColor").style.backgroundColor = "#920028";
            document.getElementById("currGuess").innerHTML= "Warm"

        }else if (guess > (answer/6)){
            document.getElementById("guessColorF").style.backgroundColor = "lightskyblue";
            document.getElementById("guessColor").style.backgroundColor = "lightskyblue";
            document.getElementById("currGuess").innerHTML= "Cold"
        }
    else{
        document.getElementById("currGuess").innerHTML= "Freezing";
        document.getElementById("guessColor").style.backgroundColor = "blue";
        document.getElementById("guessColorF").style.backgroundColor = "blue";


    }
        



        
        

        




        

        
        

        













    }
    

}