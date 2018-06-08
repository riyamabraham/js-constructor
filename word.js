var inquirer = require("inquirer");
var letter = require("./letter.js");

var word = {
    string: "",
    check: "",
    toString: function () {
        tofill();
        for(var i=0;i<string.length;i++){
            console.log("_");
        }
    },
   getInput: function () {
        inquirer.prompt([
            {
            name:"name",
            message: "?guess a letter"
            }
        ]).then(function(answer){
            guess(name);
        });
    }


}
