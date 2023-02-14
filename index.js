// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js');
const { log } = require('console');

// TODO: Create an array of questions for user input
const questions = [
    {type: 'input',
     message: 'What is the name of your project?',
     name: 'title',
    },

    {type: 'input',
     message: 'Description of you project?',
     name: 'description',
    },

    {type: 'input',
     message: 'Are there any installation instruction?',
     name: 'install',
    },

    {type: 'input',
     message: 'What is the usage of the project?',
     name: 'usage',
    },

    {type: 'input',
     message: 'What are some contribution guidelines?',
     name: 'contribution',
    },

    {type: 'input',
     message: 'Is there any testing instructions?',
     name: 'testing',
    },

    {type: 'list',
     message: 'Select your License',
     name: 'license',
     choices: [ 'None',
     'Apache License 2.0',
     'GNU General Public License v3.0',
     'BSD 3-Clause License',
     'MIT License',
     'Mozilla Public License 2.0',
    ]},

    {type: 'input',
     message: 'What is GitHub user name?',
     name: 'github',
    },

    {type: 'input',
     message: 'What is your e-mail?',
     name: 'email',
    }, 
];

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('example-Readme.md', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("file created");
        }
    })
}

// TODO: Create a function to initialize app
function init() {inquirer
    .prompt(questions)
    .then (data => {
        return generateMarkdown(data);
    })
    .then (data => {
        return writeToFile(data);
    })
    .catch(err => {
        console.log(err);
    })
}

// Function call to initialize app
init();
