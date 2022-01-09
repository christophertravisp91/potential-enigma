// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the functions of your application.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do you install your application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How do you use your application?'
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'What are your contributions to this application?',
        choices: [
            "MIT [!License: MIT]",
            "Apache 2.0 [!License: MIT]",
            "The Unlicense [!License: MIT]",
        ]
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are your contributions to this application?'
    },
    {
        type: 'input',
        name: 'test',
        message: 'What tests do you have in place for your application?'
    },
    {
        type: 'input',
        name: 'questions',
        message: 'If anyone has questions how can they reach you? (Please enter your GitHub Username and an Email address!)'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            return console.log(err)
        } else {
            console.log("Congratulations, you have created a README file!")
        }
    });
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {   
        writeToFile("ReadMe.md", generateMarkdown(data));
    })
    .catch((err) => {
        console.log(err);
    })
}

// Function call to initialize app
init();
