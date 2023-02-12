// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input',
     message: 'What is the name of your project?',
     name: 'projectTitle',
    },

    {type: 'input',
     message: 'Description of you preoject?',
     name: 'projectDescription',
    },

    {type: 'input',
     message: 'Are there any installation instruction?',
     name: 'projectInstallation',
    },

    {type: 'input',
     message: 'What is the usage of the project?',
     name: 'projectUsage',
    },

    {type: 'input',
     message: 'What are some contribution guidelines?',
     name: 'projectcontribution',
    },

    {type: 'input',
     message: 'Is there any testing instructions?',
     name: 'projectTest',
    },


];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {inquirer
    .prompt(questions)
    .then ((data) =>
    console.log(data));    
}

// Function call to initialize app
init();
