
document.addEventListener("keydown", function(event) {
    var actionKey = event.key;
    console.log(actionKey);
    pressed(actionKey);
    switch(event.key) {
        case "s":  
            var squirrel = new Audio("./sounds/squirrel.mp3");
            squirrel.play();
            setTimeout(function() {
                squirrel.pause()
            }, 1500);
            break;
        case "d":
            var deer = new Audio("./sounds/deer.mp3");
            deer.play();
            setTimeout(function() {
                deer.pause()
            }, 1500);
            break;
        case "m":
            var scream = new Audio("./sounds/scream.mp3");
            scream.play();
            setTimeout(function() {
                scream.pause()
            }, 3000);
            console.log(event.key);
            var object = document.querySelector("." + event.key);
            object.classList.remove("women");
            object.classList.add("zombie");
            setTimeout(function(){
                object.classList.remove("zombie");
                object.classList.add("women");
            },2000);
            break;
        default: console.log("no found") 
    };
});

var animals = document.querySelectorAll(".animal");
console.log(animals);

for(i=0; i<animals.length; i++) {
    animals[i].addEventListener("click", function() {
        var chosenButton = this.innerHTML;
        var number = chosenButton.length;
        console.log(chosenButton.slice(number-1));
        console.log(this);
        switch(chosenButton.slice(number-2,number-1)) {
        case "s":  
            var squirrel = new Audio("./sounds/squirrel.mp3");
            squirrel.play();
            setTimeout(function() {
                squirrel.pause()
            }, 1500);
            break;
        case "d":
            var deer = new Audio("./sounds/deer.mp3");
            deer.play();
            setTimeout(function() {
                deer.pause()
            }, 1500);
            break;
        case "m":
            var scream = new Audio("./sounds/scream.mp3");
            scream.play();
            setTimeout(function() {
                scream.pause()
            }, 3000);
            this.classList.remove("women");
            this.classList.add("zombie");
            var object = this;
            setTimeout(function(){
                object.classList.remove("zombie");
                object.classList.add("women");
            },2000);
            break;
        default: console.log("no found"); 
    };
    })
    };

function pressed (element) {
    var pressedKey = document.querySelector("."+ element);
    pressedKey.classList.add("pressed");
    setTimeout(function(){
        pressedKey.classList.toggle("pressed")
    }, 150);
};