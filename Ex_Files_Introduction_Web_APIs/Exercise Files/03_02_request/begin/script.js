//connect to API first 
var request = new XMLHttpRequest();

request.open("Get", 'https://hplussport.com/api/products')
request.onload = function() {
    //response is the response from the API in the form of a string
    var response = request.responseText;
    var parsedData = JSON.parse(response);
    console.log(parsedData)
}
request.send();