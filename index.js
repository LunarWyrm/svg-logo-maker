//import inquirer
const fs = require('fs');
const inquirer=require("inquirer");


// Questions for generating a logo
const questions = [
    {
    type: 'input',
    name: 'characters',
    message: 'Enter three characters for your logo to feature.'
    },
    {
    type: 'input',
    name: 'color',
    message: 'Please choose a text color (keyword or hex).'
    },
    {
    type: 'list',
    name: 'shape',
    message: 'Please choose a shape.',
    choices: ['triangle', 'circle', 'square']
    }
]


function init() {
    inquirer.prompt(questions).then(data => {
        //makes sure the user enters no more than 3 characters
        if (questions.characters.length > 3) {
            console.log("No more than 3 characters please!");
        } else {
            console.log("The input has 3 or fewer characters.");
          }

        console.log("init function has turned on.");

    })
}

init();