//connect to API first 
var request = new XMLHttpRequest();
//adding the ? after the link tells it that everything after is a  parameter
request.open('GET', 'https://lldev.thespacedevs.com/2.2.0/launch/upcoming/?agency_launch_attempt_count=1')
request.onload = function() {
    //response is the response from the API in the form of a string
    var response = request.responseText;
    var parsedData = JSON.parse(response);
    console.log(parsedData)

    

	var description = parsedData.results[1].name;
	console.log(description, "DESCRIPTION")
}
request.send();