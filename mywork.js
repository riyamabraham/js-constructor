var inquirer = require("inquirer");

var word = require("./word.js");

//here our words are stored
var wordArray = [
    "journal",
    "mediator"
];
console.log(wordArray);

//select a random word from the array
var rand = wordArray[Math.floor(Math.random() * wordArray.length)];
console.log(rand);

//declare the variabes
var underscores = [];
var alreadychoosed = [];
var ansarray = [];
var chancesLeft = 10;//total number of chances for the user
var flag;
var divider = ["************************"];

//var letter = new word(rand);
//display underscores in screen
for (var i = 0; i < rand.length; i++) {
    underscores.push("_");
}

function display() {
    console.log("\n" + divider + "\n");
    console.log("Guess a letter : " + underscores.join(" "));
    console.log("\n" + divider + "\n");
    console.log("Guesses left : " + chancesLeft + "\n");
}
display();//display the interface


//main logic of the program
function ask() {

    inquirer.prompt([
        {
            name: "name",
            message: "letter"
        }
    ]).then(function (answer) {

        chancesLeft--;
        for (var i = 0; i < rand.length; i++) {
            

            if (answer.name === rand[i]) {

                ansarray.push(answer.name);
                console.log("CORRECT!!");
                underscores[i] = answer.name;
                display();
                //flag = true;
                // alreadychoosed.push(answer.name);
                //console.log(alreadychoosed.length);   
            }

        }

        if (rand === ((underscores).join(""))) {
            console.log("Won!!");
        } else if (chancesLeft !== 0) {
            ask();      //callback
        }
        else {
            console.log("Sorry game over");
        }
    });
}
ask();  //now the guess will become 5



