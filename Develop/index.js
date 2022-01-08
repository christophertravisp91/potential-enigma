// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./develop/utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'Title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'Description',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'Installation',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'Usage',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'Contribution',
        message: 'What is your name?'
    },
    {
        type: 'input',
        name: 'Tests',
        message: 'What is your name?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
        return console.log(err);
        }
    
        console.log("Congratulations, you have created a README file!")
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerResponse, data) => {   
        fs.writeFileSync("ReadMe.md", inquirerResponse, data);
    })
    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app
init();
