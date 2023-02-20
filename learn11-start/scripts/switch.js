//implemented my own range function to make this program easier
//this range function is perfect for this project, it returns the number of runs in the range, but it pluses one to the start, so 0 is not put into this range, because I use range to test if a user is a different zodiak. In python I would check against the indexes, but here I just check aginst my range number. 
//mine counts from 0 to 20, but returns 1.....21
function range(start, end){
    var rangeTrac = 0
    var rangeList = []
    for (let i = start; i <= end; i++){
        rangeTrac++
        rangeList.push(rangeTrac)
        
    }
    //rangelist is a list of numbers, and each number represents a single run
    return rangeList

}

function calculate() {
    var chi = '';
    let myname = document.getElementById("fname").value;
    let month = document.getElementById("month").value;
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
            chi = "Sadface";


    }
    console.log(month, date)
    if ((month === "march" || month === "april") && (date in range(0, 21))){
        console.log("ARIES")
    }else if ((month == "april" || month === "may") && (date in range(0, 20))){
        console.log("Taurus")
        
    }else if ((month == "may" || month === "june") && (date in range(0, 21))){
        console.log("Gemini")
        
    }else if ((month == "may" || month === "june") && (date in range(0, 21))){
        
    }

    
    document.getElementById("nameout").innerHTML = myname;
    document.getElementById("chinese").innerHTML = "Your Chinese zodiac sign is: " + chi;


}