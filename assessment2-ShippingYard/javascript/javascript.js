//PROJECT: Shipping Yard Online INVENTORY WEBSITE

let shippingYard = [];

//first 2 values are name and price, 3-5 are item dependent but all similar 
let samsungSmartTv = {itemName:'Samsung SmartTV', destination:'samsung QA Center ', shipDate: '2/16/2023', containerSection:'SectionF', quantity:30, image:'images/smartTV.png'}
shippingYard.push(samsungSmartTv)
let chair =  {itemName:'Ikea White Wooden Chair', destination:'Ikea truck station', shipDate: '2/28/2023', containerSection:'SectionE', quantity:10, image:'images/ikeaChair.png'}
shippingYard.push(chair)
let graphics =  {itemName:'Nvidia RTX 4090 Founders Edition', destination:'Nvidia WareHouse', shipDate: '4/28/2024', containerSection:'SectionZ', quantity:3, image:'images/rtx4090.png'}
shippingYard.push(graphics)
let bannan =  {itemName:'Dole Bannana', destination:'Dole Sorting and Distribution Center', shipDate: '2/2/2023', containerSection:'SectionA', quantity:60, image:'images/fresh-yellow-banana-fruit-free.png'}
shippingYard.push(bannan)
let duck =  {itemName:'Yellow Rubber Duck', destination:'MCC', shipDate: '3/20/2023', containerSection:'SectionL', quantity:100, image:'images/rubber_duck.png'}
shippingYard.push(duck)



function displayAgenda(){
    shippingYard.forEach((element) => {
        var agendaItem = `<h2>${element.itemName}</h2>` + `<img src='${element.image}' alt="${element.itemName}">` +
        `<h4>Quantity: ${element.quantity}</h4>` +
        `<h3>Destination: ${element.destination}</h3>` + 
        `<h3>Container Loading Zone: ${element.containerSection}</h3>`;
        console.log(`${element.itemName}`)
        document.getElementById('displayArea').innerHTML += agendaItem
    });

    


}


