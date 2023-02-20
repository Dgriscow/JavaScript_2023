
function calculate() {
    var chi = '';
    let myname = document.getElementById("fname").value;
    let month = document.getElementById("month").value;
    month = month.toLowerCase();
    month = month.slice(0,3)
    let date = parseInt(document.getElementById("date").value);
    let year = parseInt(document.getElementById("year").value);
    

    


    switch (year) {
        case 1924:
        case 1936:
        case 1948:
        case 1960:
        case 1972:
        case 1984:
        case 1996:
        case 2008:
        case 2020:
            chi = "Rat"
            break;
        case 1937:
        case 1949:
        case 1961:
        case 1973:
        case 1985:
        case 1997:
        case 2009:
        case 2021:
            chi = "Ox"
            break;
        case 1938:
        case 1950:
        case 1962:
        case 1974:
        case 1974:
        case 1974:
        case 1986:
        case 1998:
        case 2010:
        case 2022:
            chi = "Tiger"
            break;
        
        case 1939:
        case 1951:
        case 1963:
        case 1975:
        case 1987:
        case 1999:
        case 2011:
        case 2023:
            chi = "Tiger"
            break;
        case 1952:
        case 1964:
        case 1976:
        case 1988:
        case 2000:
        case 2012:
        case 2024:
            chi = "Dragon"
            break;
        case 1917:
        case 1929:
        case 1941:
        case 1953:
        case 1965:
        case 1977:
        case 1989:
        case 2001:
        case 2013:
            chi = "Snake"
            break;
        case 1942:
        case 1954:
        case 1966:
        case 1978:
        case 1990:
        case 2002:
        case 2014:
            chi = "Horse"
            break;
        case 1931:
        case 1943:
        case 1955:
        case 1976:
        case 1979:
        case 1991:
        case 2003:
        case 2015:
            chi = "Goat"
            break;
        case 1932:
        case 1944:
        case 1956:
        case 1980:
        case 1992:
        case 2004:
        case 2016:
            chi = "Monkey"
            break;
        case 1945:
        case 1957:
        case 1969:
        case 1981:
        case 1993:
        case 2005:
        case 2017:
            chi = "Rooster"
            break;
        case 1922:
        case 1934:
        case 1946:
        case 1958:
        case 1970:
        case 1982:
        case 1994:
        case 2006:
        case 2018:
            chi = "Dog"
            break;
        case 1935:
        case 1947:
        case 1959:
        case 1971:
        case 1983:
        case 1995:
        case 2007:
        case 2019:
            chi = "Pig"
            break;
        default:
            chi = "Error: Invalid date";


    }
    console.log(month, date)
    //using a switch statement to get a users starsign
    var starSign = ""
    switch (month) {
        case "jan":
            if (date <= 19){
                starSign = "Capricorn"
            }else{
                starSign = "Aquarius"
            }
            break;
        case "feb":
            if (date <= 18){
                starSign = "Aquarius"
            }else{
                starSign = "Pisces"
            }
            break;
        case "mar":
            if (date <= 19){
                starSign = "Pisces"
            }else{
                starSign = "Aries"
            }
            break;
        case "apr":
            if (date <= 19){
                starSign = "Aries"
            }else{
                starSign = "Taurus"
            }
            break;
        case "may":
            if (date <= 21){
                starSign = "Taurus"
            }else{
                starSign = "Geminis"
            }
            break;
        case "jun":
            if (date <= 20){
                starSign = "Gemini"
            }else{
                starSign = "Cancer"
            }
            break;
        case "jul":
            if (date <= 22){
                starSign = "Cancer"
            }else{
                starSign = "Leo"
            }
            break;
        case "aug":
            if (date <= 22){
                starSign = "Leo"
            }else{
                starSign = "Virgos"
            }
            break;
        case "sep":
            if (date <= 22){
                starSign = "Virgos"
            }else{
                starSign = "Libra"
            }
            break;
        case "oct":
            if (date <= 21){
                starSign = "Libra"
            }else{
                starSign = "Scorpio"
            }
            break;
        case "nov":
            if (date <= 22){
                starSign = "Scorpio"
            }else{
                starSign = "Sagittarius"
            }
            break;
            case "dec":
                if (date <= 22){
                    starSign = "Sagittarius"
                }else{
                    starSign = "Capricorn"
                }
                break;
            default:
                starSign = "Error: Invalid date"
        
        
        
    }



    console.log(starSign)

    
    document.getElementById("nameout").innerHTML = myname;
    document.getElementById("chinese").innerHTML = "Your Chinese zodiac sign is: " + chi;
    document.getElementById("zodiac").innerHTML = "Your zodiac sign is: " + starSign;



}