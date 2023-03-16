//Recipe apps
let allRecipes = {name: "AllRecipes", siteType:"Website",primaryRecipeType: "General Purpose", rating:8, ssLink:"images/allRecipes.png", description: "allrecipes is a big general purpose Recipe site. The site has three main categories to help you search for specific foods that you'd like. The first category is dinners, which when you click on it, you get tons of different 'Dinner' options for what kind of dinners do you want to make, and then inside of those options you get tons of recipes for the foods. Then there is the 'Meals' section, the meals section has tons of different meal type categories, like breakfast, lunch, side dishes, appetizers, and even more. Then the last major category is 'Ingredients'. The ingridients section displays a ton of different food ingridients, and from those ingridients it gives you recipes that have the foods in them. Theres a few other categories but these are the major ones.", link:"https://www.allrecipes.com"};
let bonappetit = {name: "Bon Appetit", siteType:"Website",primaryRecipeType: "General Purpose", rating:6, ssLink:"images/bonAppetit.png", description: "Bon Appetit is a general purpose recipe website. Its got lot of categories for different foods that are very distinguished from each other. Some of the categories they have are Dinner, Lunch, and Breakfast. They also have a few miscolanious categories for foods that dont fit with the 3 main categories. They also have a ingredients dropdown that when you click on it, has tons of different recipies that require include the ingredients in the recipe. They also feature a section for cooking tips, and a few addition features, like some videos to watch, and lots of other food recipe categories.", link:"https://www.bonappetit.com"};
let simplyRecipes = {name: "Simply Recipes", siteType:"Website",primaryRecipeType: "General Purpose", rating:6, ssLink:"images/simplyRecipes.png", description: "Simply Recipes is a general purpose recipie website that has 5 main food categories. These include Breakfast, Lunch, Dinner, Desert, and Drinks. They have a few other specialty options like snacks & appetizers, and holiday recipies. The website is a bit clunky, and has alot going on in the main index page, and lacks a bit of ease of access.", link: "https://www.simplyrecipes.com"};
let delish = {name: "Delish", siteType:"Website", primaryRecipeType: "Dinners", rating:5, ssLink:"images/delish.png", description:"Delish is a more dinner focused recipie app. Delish displays the dinners and recipe buttons front and center at the top of the website. However its a bit clunky and unintuitive to get to a recipe you would want to eat. Its much more article oritentated, but does have some good recipes in there.", link:"https://www.delish.com/#"};
let helloFresh = {name: "Hello Fresh", siteType:"Website",primaryRecipeType: "General Purpose", rating:0, ssLink:"images/hf.png", description:"Hello fresh is a terrible recipe website. its more a subscription plan than anything. It has lots of recipies on display, and can be good for giving ideas, however you cant access them without buying the product. Very quick to lead the user away." ,link:"https://www.hellofresh.com/plans"};
let panaceaPalm = {name:"Panaceapalm", siteType: "Instagram",primaryRecipeType:"High Protein General Purpose", rating:7, ssLink:"images/panaceapalm.png", description:"Panaceapalm is an instagram account that focuses largley on protein heavy meals. Its more dedicated to bulking type foods, but they are all still healthy. He cooks a large variety of foods, but most of them are dinner/lunch type foods. He does deviate from these though. These recipies would be good for adding under the gain mass category. ", link:"https://www.instagram.com/panaceapalm/"}
let tastyshreds = {name:"Tastyshreds", siteType: "Instagram",primaryRecipeType:"Lunches", rating:8, ssLink:"images/tastyshreds.png", description:"This guy makes alot of nice looking dinner and lunch meals that all look amazing to eat and try. He makes lots of variety in the food types, they vary from pizza, to chicken, to breaded type foods and even deserts.", link:"https://www.instagram.com/tastyshreds/"}
let zackchug = {name:"zackchug", siteType: "Instagram",primaryRecipeType:"High Protein General", rating:10, ssLink:"images/zackchug.png", description:"This guy makes some of the most delishious looking foods, and they are all good for protein and bulking. The foods are all amazing looking, and jo has tried one before, and can also say for sure the recipies are great.", link:"https://www.instagram.com/tastyshreds/"}

var Recipiez = [allRecipes, bonappetit, simplyRecipes, delish, helloFresh, panaceaPalm, tastyshreds];
//sorts the array in highest to lowest order
Recipiez.sort(function(a,b){return b.rating - a.rating})








function displayAllRecipes(){
    console.log("displayingDATA")

    let list = Recipiez.map(function(recipe){
        console.log(recipe)
        let recipeButton = document.createElement('button');
        switch (recipe.siteType){
            case "Instagram":

                recipeButton.innerHTML = `<h3 id="instagramIndicator"> ${recipe.siteType}<h3>` + `<h2>${recipe.name}</h2>`+ `<h4>Recipe Source Rating: ${recipe.rating}</h4>` ; // Set the button title and a rating
                recipeButton.addEventListener("click", function(event){
                    event.preventDefault();
                    maximizeRecipeInfo(recipe)
                })

                break;
            case "Website":

                recipeButton.innerHTML = `<h3 id="webIndicator"> ${recipe.siteType}<h3>` + `<h2>${recipe.name}</h2>`+ `<h4>Recipe Source Rating: ${recipe.rating}</h4>` ; // Set the button title and a rating
                recipeButton.addEventListener("click", function(event){
                    event.preventDefault();
                    maximizeRecipeInfo(recipe)
                })

                break;

                
                
        }


        //recipeButton.onclick = function() {maximizeRecipeInfo(recipe)};
        document.getElementById('RecipeZList').appendChild(recipeButton);
    })
    
}



 
function maximizeRecipeInfo(R){
    //clear recipieList 
    document.getElementById("RecipeZList").innerHTML = ""
    
    document.getElementById('RecipeZList').setAttribute('class', "RecipeSiteZone")
    //document.getElementById('RecipeZList').innerHTML += <button id="closeButton">X</button>
    siteLinkScreen(R)
    

    
}




function returnToListScreen(){
    document.getElementById("RecipeZList").innerHTML = ""
    
    document.getElementById('RecipeZList').setAttribute('class', "RecipeZone")

    displayAllRecipes()

}

function siteLinkScreen(ROB){
    var recipeDocument = document.getElementById("RecipeZList")
    recipeDocument.innerHTML += `<h1 id="PRType">${ROB.primaryRecipeType}</h1>`
    recipeDocument.innerHTML += `<h1 id="NameHeader">${ROB.name}</h1>`
    

    
    recipeDocument.innerHTML += `<button id="closeTOListScreen" onclick="returnToListScreen()">X</button>`
    recipeDocument.innerHTML += `<img src="${ROB.ssLink}" alt="${ROB.name}">`
    recipeDocument.innerHTML += `<p id="descriptionGraph"> ${ROB.description}</p>`
    recipeDocument.innerHTML += `<a href="${ROB.link}">Link to ${ROB.name}</a>`




}



