//connect to API first 
var request = new XMLHttpRequest();
//adding the ? after the link tells it that everything after is a  parameter
request.open("Get", 'https://hplussport.com/api/products?&order=name')
request.onload = function() {
    //response is the response from the API in the form of a string
    var response = request.responseText;
    var parsedData = JSON.parse(response);
    console.log(parsedData)

	

	for(item in parsedData){
		var name = parsedData[item].name;
		
		var products = document.createElement('li');
		products.innerHTML = name;
		document.body.appendChild(products);

		var imageUrl = parsedData[item].image;

		var images = document.createElement('img');
		images.setAttribute('src', imageUrl);
		document.body.appendChild(images);

	}

	
}
request.send();