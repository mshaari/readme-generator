// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
        validate: input => {
            if (input==="") {
                console.log('You need to enter a title to continue!');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your application.',
        validate: input => {
            if (input==="") {
                console.log('You need to enter a description to continue!');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'How do we install the application?',
        validate: input => {
            if (input==="") {
                console.log('You need to enter installation instructions to continue!');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage information for your application.',
        validate: input => {
            if (input==="") {
                console.log('You need to enter usage information to continue!');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'What are the contribution guidelines for your application?',
        validate: input => {
            if (input==="") {
                console.log('You need to enter contribution guidelines to continue!');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'What are the test instructions for your application?',
        validate: input => {
            if (input==="") {
                console.log('You need to enter test instructions to continue!');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'list',
        choices: ['agpl-3.0', 'gpl-3.0', 'lgpl-3.0', 'mpl-2.0', 'apache-2.0', 'mit', 'bsl-1.0', 'unlicense', 'no license'],
        name: 'license',
        message: 'Please select your license (select one).',
        validate: input => {
            if (input==="") {
                console.log('You must choose a license to continue (no license is an option to select).');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
        validate: input => {
            if (input==="") {
                console.log('You need to enter a GitHub username to continue!');
                return false;
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
        validate: input => {
            if (input==="") {
                console.log('You need to enter an email to continue!');
                return false;
            } else {
                return true;
            }
        }
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