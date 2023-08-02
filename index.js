// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = ['What is the title of this project?',
'Provide a description of this project.',
'What are the installation instructions for this project?',
'How is this project used?',
'What are the contribution guidlines for this project?',
'What are the test instructions for this project?',
'Which license is this project covered under?',
'What is your GitHub URL?',
'What is your email?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) =>
    error ? console.error(error) : console.log('Successfully created README!'))
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt([
        {
            type: 'input',
            message: questions[0],
            name: 'title'
        },
        {
            type: 'input',
            message: questions[1],
            name: 'description'
        },
        {
            type: 'input',
            message: questions[2],
            name: 'installation'
        },
        {
            type: 'input',
            message: questions[3],
            name: 'usage'
        },
        {
            type: 'input',
            message: questions[4],
            name: 'contribution'
        },
        {
            type: 'input',
            message: questions[5],
            name: 'testing'
        },
        {
            type: 'list',
            message: questions[6],
            choices: ['Apache License 2.0', 'GNU General Public License v3.0', 'MIT License', 'BSD 2-Clause "Simplified" License', 'BSD 3-Clause "New" or "Revised" License', 'Boost Software License 1.0', 'Creative Commons Zero v1.0 Universal', 'Eclipse Public License 2.0', 'GNU Affero General Public License v3.0', 'GNU General Public License v2.0', 'GNU Lesser General Public License v2.1', 'Mozzila Public License 2.0', 'The Unilicense', 'N/A'],
            name: 'license'
        },
        {
            type: 'input',
            message: questions[7],
            name: 'github'
        },
        {
            type: 'input',
            message: questions[8],
            name: 'email'
        }
    ])
    .then((data) => {
    const readMeContent = generateMarkdown(data);
    writeToFile('README.md', readMeContent)});
}

// Function call to initialize app
init();
