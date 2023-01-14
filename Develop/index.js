// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('Develop/utils/generateMarkdown.js'); //is this the right path
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        if (title)
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.',
    },
    {
        type: 'input',
        name: 'usageInformation',
        message: 'Please enter usage information for your project.',
    },
    {
        type: 'input',
        name: 'contributionGuidelines',
        message: 'Please enter contribution guidelines for your project.',
    },
    {
        type: 'input',
        name: 'testInstructions',
        message: 'Please enter test instructions for your project.',
    },
    {
        type: 'input',
        choices: ['mit', 'creative commons', 'no license'], //add more options to this
        name: 'description',
        message: 'Please describe your project.',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
