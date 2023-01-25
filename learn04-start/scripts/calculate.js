function addDate(){
    let today = new Date();
    document.getElementById("today").innerHTML = today;
    document.getElementById("name").value = "";
    document.getElementById("rm1Length").value = "";
    document.getElementById("rm1width").value = "";
    document.getElementById("rm1height").value = "";
    document.getElementById("rm1cost").value = "";
}


function estimate(){
    
    let name = document.getElementById("name").value;
    //ParseFloat turns the entrys from the entry box into a floatint point number
    
    let length = parseFloat(document.getElementById("rm1length").value);
    let width = parseFloat(document.getElementById("rm1width").value);
    let height = parseFloat(document.getElementById("rm1height").value);
    
    let totalSqFt = ((length * height * 2) + (length * width * 2));
    let cost = (totalSqFt * .65);
    document.getElementById("rm1cost").value = cost;

    var totalCost = cost;
    document.getElementById("estimate").innerHTML = (name + ", your estimated total is: " + totalCost)
}   