let cart = [];

function addToCart(type, cost, name){
    // when addToCart is called it sends over the name of the category 
    // the item was From, and the price of the selected item
    
    let newItem = {foodType:type, itemCost:cost, foodName:name};
    cart.push(newItem);
}

function calculateTotal(){
    var name = "User";
    name = document.getElementById("name").value;
    document.getElementById('buyConfirmation').style.display = 'block';
    var typesToCost = {pizza:0, drinks:0, sides:0, deserts:0, wraps:0};
    var totalCost = 0;
    
    
    var logMessage = name + " You Bought: ";
    


    cart.forEach((element) => {
        console.log(element['foodType'], "FOODTYPE");
        console.log(element['itemCost'], "COST");
        console.log(element['foodName'], 'foodname')
        logMessage += element['foodName'];
        totalCost += element['itemCost']


        typesToCost[element['foodType']] += element['itemCost'];


    });

    let categoryCost = " Pizza: " + typesToCost.pizza + " Wraps: " + typesToCost.wraps + " Drinks: " + typesToCost.drinks+ " Sides: " + typesToCost.sides + " Deserts: " + typesToCost.deserts;
    
    console.log(name);
    //name = document.getElementById('name').innerHTML;
    console.log(name);
    var totalCostMessage = "$" + totalCost
    
    document.getElementById('buyMessage').innerHTML = logMessage;
    document.getElementById('categoryCost').innerHTML = categoryCost;
    document.getElementById('tot').innerHTML = totalCostMessage;

    
}



function displayEntry(food){
    let entry = food;

    if (entry == 'pizza'){
        document.getElementById('pizzaWindow').style.display = 'block';
        document.getElementById('drinksWindow').style.display = 'none';
        document.getElementById('sidesWindow').style.display = 'none';
        document.getElementById('desertsWindow').style.display = 'none';
        document.getElementById('wrapsWindow').style.display = 'none';
    }else if (entry == 'drinks'){
        document.getElementById('pizzaWindow').style.display = 'none';
        document.getElementById('drinksWindow').style.display = 'block';
        document.getElementById('sidesWindow').style.display = 'none';
        document.getElementById('desertsWindow').style.display = 'none';
        document.getElementById('wrapsWindow').style.display = 'none';
    }else if (entry == 'wraps'){
        document.getElementById('pizzaWindow').style.display = 'none';
        document.getElementById('drinksWindow').style.display = 'none';
        document.getElementById('sidesWindow').style.display = 'none';
        document.getElementById('desertsWindow').style.display = 'none';
        document.getElementById('wrapsWindow').style.display = 'block';
    }else if (entry == 'sides'){
        document.getElementById('pizzaWindow').style.display = 'none';
        document.getElementById('drinksWindow').style.display = 'none';
        document.getElementById('sidesWindow').style.display = 'block';
        document.getElementById('desertsWindow').style.display = 'none';
        document.getElementById('wrapsWindow').style.display = 'none';
    }else if (entry == 'deserts'){
        document.getElementById('pizzaWindow').style.display = 'none';
        document.getElementById('drinksWindow').style.display = 'none';
        document.getElementById('sidesWindow').style.display = 'none';
        document.getElementById('desertsWindow').style.display = 'block';
        document.getElementById('wrapsWindow').style.display = 'none';
    }

}