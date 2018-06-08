// dependency for inquirer npm package
//var inquirer = require("inquirer");

//make a constructor for making letter objects
var letter = {
    character: "",
    check: "",
    tofill: function () {
        if(check === true){
            cnsole.log("character");
        }
        else{
            console.log("_")
        }
    },
    guess: function (name) {
        if(name === letterToGuess){
            check = true;
        }
        else{
            check = false;
        }
    }
}
console.log("hi");

// creates the printInfo method and applies it to all letter objects


