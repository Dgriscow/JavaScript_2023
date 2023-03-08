//connect to API first 
var request = new XMLHttpRequest();
//adding the ? after the link tells it that everything after is a  parameter
request.open("Get", 'https://hplussport.com/api/products?qty=2&order=name')
request.onload = function() {
    //response is the response from the API in the form of a string
    var response = request.responseText;
    var parsedData = JSON.parse(response);
    console.log(parsedData)

	var description = parsedData[0].description;
	console.log(description)
}
request.send();