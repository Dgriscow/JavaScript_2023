$(document).ready(function() {

    $("#submit").click(function (){
        event.preventDefault();

        // build meeting entry input by input
        meetingEntry = $("#subject").val();
        console.log(meetingEntry);
        meetingEntry +=  " " + $("#host").val();
        meetingEntry += " " + $("#meeting_start").val();
        meetingEntry += " " + $("#meeting_end").val();
        meetingEntry += " " + $("#code").val();
        console.log(meetingEntry);
        //append value to meeting space
        $("#meeting_space").append(meetingEntry);

        //reset input fields
        $("#subject").val("");
        $("#host").val("");
        $("#meeting_start").val("");
        $("#meeting_end").val("");
        $("#code").val("");
    });


    $("#DarkMode").click(function (){
        console.log("DARK");
        $("h1").removeClass("light");
        $("h1").addClass("dark");

        $("body").removeClass("light-body");
        $("body").addClass("dark-body");

    });

    $("#LightMode").click(function (){
        console.log("ENLIGHTEN")
        $("h1").removeClass("dark");
        $("h1").addClass("light");

        $("body").removeClass("dark-body");
        $("body").addClass("light-body");

    });

    $("#IncreaseFont").click(function (){
        console.log("ENLIGHTEN")
        var currentFontsize = parseInt($("header").css('font-size'));
        currentFontsize += 3;
        setFont = currentFontsize + "px"
        $("header").css("fontSize", setFont);
        

    });

    $("#DecreaseFont").click(function (){
        console.log("ENLIGHTEN")
        var currentFontsize = parseInt($("header").css('font-size'));
        currentFontsize -= 3;
        setFont = currentFontsize + "px"
        $("header").css("fontSize", setFont);

    });



});