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


const shapeGenerators = {
    triangle: color => `<polygon points="150,15 275,200 25,200" fill="${color}" />`,
    circle: color => `<circle cx="150" cy="100" r="80" fill="${color}" />`,
    square: color => `<rect x="50" y="50" width="200" height="200" fill="${color}" />`
  };


  // Takes what shape the user wants and accesses the shapeGenerators to create the shape
function createLogo(data) {
    const shapeSVG = shapeGenerators[data.shape](data.color);
    return `
<svg width="300" height="300" xmlns="http://www.w3.org/2000/svg">
  ${shapeSVG}
  <text x="150" y="150" font-size="60" text-anchor="middle" fill="black">${data.characters}</text>
</svg>`;


// Writes data received from createLogo to file in SVG format
function writeToFile(fileName, data) {
    const svgContent = createLogo(data);
    fs.writeFileSync(fileName, svgContent);
    console.log(`SVG file has been created: ${fileName}`);
  }


function init() {
    inquirer.prompt(questions).then(data => {
        //makes sure the user enters no more than 3 characters
        if (questions.characters.length > 3) {
            console.log("No more than 3 characters please!");
        } else {
            console.log("The input has 3 or fewer characters.");
            writeToFile('logo.svg', data);
          }

        console.log("init function has turned on.");

        // validator for hex or a color
    })
}

init();