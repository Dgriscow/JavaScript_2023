$(document).ready(function() {


    $('#left').click(function() {
        $("#turtle").animate({
            marginLeft: "-=10px"
        });
    });

    $('#down').click(function() {
        $("#turtle").animate({
            marginTop: "+=10px"
        });
    });

    $('#up').click(function() {
        $("#turtle").animate({
            marginTop: "-=10px"
        });
    });

    $('#right').click(function() {
        $("#turtle").animate({
            marginLeft: "+=10px"
        });
    });

    $('#stop').click(function() {
        console.log("STOP! YOUVE VIOLATED THE LAW")
        $("#turtle").stop();
    });

    $("#sendIt").click(function(){
        $("#turtle").animate( {
            marginLeft: "+=1000px"
        }, function(){
            console.log("He Flew")
        });
      });



    $("#FreeBird").click(function(){
        $("#turtle").animate({marginLeft:'+=750px'}).animate({marginLeft:'-=700px'}).animate({marginTop: "+=1000px"}, 'slow');
        console.log("FREEEEEEE BIRD")

    });







});