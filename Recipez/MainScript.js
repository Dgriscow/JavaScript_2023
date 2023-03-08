//Recipe apps
let allRecipes = {name: "AllRecipes", primaryRecipeType: "General Purpose", rating:8};
let bonappetit = {name: "Bon Appetit", primaryRecipeType: "Dinners", rating:6};
let simplyRecipes = {name: "Simply Recipes", primaryRecipeType: "General Purpose", rating:7};
let delish = {name: "Delish", primaryRecipeType: "Dinners", rating:6};
let helloFresh = {name: "Hello Fresh", primaryRecipeType: "General Purpose", rating:2};

var Recipiez = [allRecipes, bonappetit, simplyRecipes, delish, helloFresh]

function displayAllRecipes(){

    let list = Recipiez.map(function(recipe){
        console.log(recipe)
        let recipeButton = document.createElement('button');
        recipeButton.innerHTML = `<h1>${recipe.name}</h1>` +  `<h4>${recipe.rating}</h4>`; // Set the button title and a rating
        recipeButton.addEventListener("click", function(event){
            event.preventDefault();
            maximizeRecipeInfo(recipe)
            


        })

        //recipeButton.onclick = function() {maximizeRecipeInfo(recipe)};
        document.getElementById('RecipeZList').appendChild(recipeButton);
    })
    
}

 
function maximizeRecipeInfo(R){
    //clear recipieList 
    document.getElementById("RecipeZList").innerHTML = ""
    document.getElementById('RecipeZList').setAttribute('class', "RecipeSiteZone")

    
}