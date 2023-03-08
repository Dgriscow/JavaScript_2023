//Functions Objects and Events Demo Practice 


//Different Dog Classes
const dog1 = {
    heading: "Bucket Boi",
    image: "images/black-dog.jpg",
    caption: "A Black Boi stuck in a bucket",
    altTag: "Black Dog in a Bucket"
};

const dog2 = {
    heading: "Golden Goob",
    image: "images/gold-dog.jpg",
    caption: "A Golden Dog, sitting in the grass like a Good Boy",
    altTag: "Golden Boy"
};

const dog3 = {
    heading: "A Small Helping Paw",
    image: "images/snow-dog.jpg",
    caption: "A very small dog lending a hand to a snow covered fella",
    altTag: "Helping Paws"
};

const dog4 = {
    heading: "A Tiny White Dog with his parents",
    image: "images/white-dogs.jpg",
    caption: "A tiny dog sitting in the sand, spending time with one of his parents",
    altTag: "Two White Dogs Chilling"
};



function selectDog(dog) {        //option is a number that is passed to it from a button being called
    //depending on what option is, brings up a different dog object
    if (dog == 1){
        loadDog(dog1, 1)
    }else if (dog == 2){
        loadDog(dog2, 2)
    }else if (dog == 3){
        loadDog(dog3, 3)
    }else if (dog == 4){
        loadDog(dog4, 4)
    }

}

function loadDog(dog, dogNum){
                            //if dog 1 is called, then dognum = 1, and this line calls "heading1"
    document.getElementById("heading" + dogNum).innerHTML = dog.heading;
    document.getElementById("img" + dogNum).src = dog.image;
    //this changes the currently selected img from none to block
    document.getElementById("img" + dogNum).style.display = "block";
    document.getElementById("p" + dogNum).innerHTML = dog.caption;
    document.getElementById("img" + dogNum).setAttribute('alt', dog.altTag);




}