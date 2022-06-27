// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// getting the function from the file
const readMeGenerator = require('./readMeGenerator');


// TODO: Create an array of questions for user input
const questions = [
    {
        // title
        type: 'input',
        message: 'What is the title of your repository?',
        name: 'title',
    },

    {
        // description
        type: 'input',
        message: 'What is the description of your project? Include the purpose, what it does, and technologies used.',
        name: 'projectDesc',
    },

    {
        // table of contents
        type: 'input',
        message: 'Press enter to create a table of contents.',
        name: 'tableContents',
    },

    {
        // installation
        type: 'input',
        message: 'What needs to be installed in order to run this application?',
        name: 'installInst',
    },

    {
        // usage
        type: 'input',
        message: 'What is the purpose of this application and how is it used?',
        name: 'useInfo',

    },

    {
        // contributing
        type: 'input',
        message: 'Can other developers contribute to this repository?',
        name: 'contributeGuide',
    },

    {
        // tests
        type: 'input',
        message: 'How can other developers test this application?',
        name: 'testing',
    },

    {
        // license
        type: 'list',
        message: 'Choose a license for your application from the following options?',
        choices: ['MIT',
            'Eclipse',
            'Microsoft',
            'IBM',
            'GNU'
        ],
        name: 'license',
    },

    {
        // gh username
        // to be added under questions
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'gitHubUsername',

    },

    {
        // gh link
        // to be added under questions
        type: 'input',
        message: 'What is your GitHub link?',
        name: 'gitHubLink',

    },

    {
        // email address
        // to be added under questions
        type: 'input',
        message: 'What is your email address?',
        name: 'emailAddress',

    },

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function (err) {
        console.log(fileName);
        console.log(data);
        if (err) {
            console.log('Error message: ', err);
        } else {
            console.log('All good!');
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((data) => {
            writeToFile('ReadMe.md', readMeGenerator(data));
            console.log(data)
        })
}

// Function call to initialize app
init();

// GIVEN a command-line application that accepts user input
// WHEN I am prompted for information about my application repository
// THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
// WHEN I enter my project title
// THEN this is displayed as the title of the README
// WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
// THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
// WHEN I choose a license for my application from a list of options
// THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
// WHEN I enter my GitHub username
// THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
// WHEN I enter my email address
// THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
// WHEN I click on the links in the Table of Contents
// THEN I am taken to the corresponding section of the README