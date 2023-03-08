sayHi()
class Person{
    constructor(fname, lname, heightf,heighti, age) {
        this.fname = fname;
        this.lname = lname;
        this.heightf = heightf;
        this.heighti = heighti;
        this.age = age;
       
    }

    personStats(){
        document.getElementById("param1").innerHTML = `${this.fname}`
        document.getElementById("param2").innerHTML = `${this.lname}`
        document.getElementById("param3").innerHTML = `${this.age}`
        document.getElementById("param4").innerHTML = `${this.heightf}`
        document.getElementById("param5").innerHTML = `${this.heighti}`
        //return `User ${this.fname} ${this.lname} is ${this.age} Years old, and stands at ${this.heightf} ${this.heighti} Ft Tall`

    }

    static heightConversion(person){
        const heightFt = person.heightf
        const heightIn = person.heighti
        var total = (heightFt * 30.48) + (heightIn * 2.54)
        return total 

    }



}


function sayHi(){
    return console.log("HELLO!")
}


function displayDevin(){
    const Devin = new Person("Devin", "Grischow",5,8,20)
    Devin.personStats()


}

