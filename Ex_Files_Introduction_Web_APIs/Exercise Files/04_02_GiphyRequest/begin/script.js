var request = new XMLHttpRequest()
var APIKEY = "43lNwwmI4yyU52uZ6Sw9P2oFxm67DEtk"
request.open("GET", `https://api.giphy.com/v1/gifs/random?api_key=${APIKEY}`)

request.onload = function(){
    var response = request.response;
    var parsedData = JSON.parse(response);
    console.log(parsedData)
}

request.send()