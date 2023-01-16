// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('/Users/michaelshaari/Desktop/Bootcamp/module-9-challenge/utils/generateMarkdown.js'); //is this the right path
const fs = require('fs');

//NEED TO MAKE QUESITONS REQUIRED
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your application.',
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do we install the application?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information for your application.',
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for your application?',
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions for your application?',
    },
    {
        type: 'checkbox',
        choices: ['agpl-3.0', 'gpl-3.0', 'lgpl-3.0', 'mpl-2.0', 'apache-2.0', 'mit', 'bsl-1.0', 'unlicense'],
        name: 'license',
        message: 'Please select your license.',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('Success!'));
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then(response => {
            writeToFile("README.md", generateMarkdown(response));
        })
}

// Function call to initialize app
init();