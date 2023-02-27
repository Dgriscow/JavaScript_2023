let mango = {color:"yellow" , taste: "sweet", season: "summers",cost:20};
let apple = {color: "red" , taste: "sweet", season : "all",cost:30};
let grapes = {color: "gree", taste:"sweet", season: "winters",cost:50};


let fruits = [mango, apple, grapes];


//Wrong way
let color = []
for(i=0;i<3;i++) {
   color[i] = fruits[i].color;
}
console.log(color);

//Right way

let Fruitscolors = fruits.map(function(fruit) {
    return fruit.color;
});
console.log(Fruitscolors);


let totalCost = fruits.reduce(function(price, fruit) {
    return fruit.cost+price;
} , 0);

console.log(totalCost); 