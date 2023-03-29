function addme() {
    let fName = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;

    let newUser = {"fname":fName, "lname":lname, "email":email, "phone":phone}
    console.log(newUser);
    //stringify new user
    let userJSON = JSON.stringify(newUser);
    document.getElementById("json-value").innerHTML = userJSON
    

}