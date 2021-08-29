// Global variables
const inquirer = require('inquirer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const fs = require('fs');
const path = require('path');
const genHTML = require('./src/generate-html');
const { prompt } = require('inquirer');
const teamArray = [];

// Initial command line prompt
const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Managers name?',
            // Check if user entered something
            validate: userName => {
                if (userName) {
                    return true
                } else {
                    console.log('Please enter your name');
                    return false;
                }
            }

        },

        {
            type: "input",
            name: "id",
            message: 'What is his/her id number?',
            // Check if user entered something
            validate: id => {
                if (id) {
                    return true
                } else {
                    console.log('Please enter an id number');
                    return false;
                }
            }
        },

        {
            type: "input",
            name: "email",
            message: 'What is his/her email?',
            // Check if user entered something
            validate: email => {
                if (email) {
                    return true
                } else {
                    console.log('Please enter an email');
                    return false;
                }
            }
        },

        {
            type: "input",
            name: "officeNo",
            message: 'What is his/her office number?',
            // Check if user entered something
            validate: officeNo => {
                if (officeNo) {
                    return true
                } else {
                    console.log('Please enter the office number');
                    return false;
                }
            }
        }

    // Take "input" answers and creates a new manager object
    ]).then(answers => {
        // console.log(answers);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNo);
        // Pushes the new manager object to the team array
        teamArray.push(manager);
        // Call menu
        promptTeamBuilder();
    })
};

// Function to prompt a team builder menu
const promptTeamBuilder = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'Select an option from the list!',
            choices: [
                'add manager',
                'add engineer',
                'add intern',
                'complete team profile'
            ]
        }
    ])
    .then(choice => {
        // Switch function based on what team choice is selected
        switch (choice.menu) {
            case 'add manager':
                addManager();
                break;
            case 'add engineer':
                addEngineer();
                break;
            case 'add intern':
                addIntern();
                break;
            // By default finish the team builder and call the finish team function
            default:
                finishTeam()
        }
    });
};

// Functions to add engineer, manager, or intern to team
const addManager = () => {
    console.log(`
    ============
    ADD MANAGER
    ============
    `)
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Engineers name?',
            // Check if user entered something
            validate: engineerName => {
                if (engineerName) {
                    return true
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }

        },

        {
            type: "input",
            name: "id",
            message: 'What is his/her id number?',
            // Check if user entered something
            validate: id => {
                if (id) {
                    return true
                } else {
                    console.log('Please enter an id number');
                    return false;
                }
            }
        },

        {
            type: "input",
            name: "email",
            message: 'What is his/her email?',
            // Check if user entered something
            validate: email => {
                if (email) {
                    return true
                } else {
                    console.log('Please enter an email');
                    return false;
                }
            }
        },

        {
            type: "input",
            name: "officeNo",
            message: 'What is his/her office number?',
            // Check if user entered something
            validate: officeNo => {
                if (officeNo) {
                    return true
                } else {
                    console.log('Please enter the office number');
                    return false;
                }
            }
        }
    ]).then(answers => {
        // console.log(answers);
        const manager = new Manager(answers.name, answers.id, answers.email, answers.officeNo);
        // Pushes the new manager object to the team array
        teamArray.push(manager);
        // Call menu
        promptTeamBuilder();
    });
};

const addEngineer = () => {
    console.log(`
    ============
    ADD ENGINEER
    ============
    `)
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the Engineers name?',
            // Check if user entered something
            validate: engineerName => {
                if (engineerName) {
                    return true
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }

        },

        {
            type: "input",
            name: "id",
            message: 'What is his/her id number?',
            // Check if user entered something
            validate: id => {
                if (id) {
                    return true
                } else {
                    console.log('Please enter an id number');
                    return false;
                }
            }
        },

        {
            type: "input",
            name: "email",
            message: 'What is his/her email?',
            // Check if user entered something
            validate: email => {
                if (email) {
                    return true
                } else {
                    console.log('Please enter an email');
                    return false;
                }
            }
        },

        {
            type: "input",
            name: "github",
            message: 'What is his/her github username?',
            // Check if user entered something
            validate: github => {
                if (github) {
                    return true
                } else {
                    console.log('Please enter the username as it appears on github');
                    return false;
                }
            }
        }
    ]).then(answers => {
        // console.log(answers);
        const engineer = new Engineer(answers.name, answers.id, answers.email, answers.github);
        // Pushes the new manager object to the team array
        teamArray.push(engineer);
        // Call menu
        promptTeamBuilder();
    });
};

const addIntern = () => {
    console.log(`
    ============
    ADD INTERN
    ============
    `)
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is the interns name?',
            // Check if user entered something
            validate: internName => {
                if (internName) {
                    return true
                } else {
                    console.log('Please enter a name');
                    return false;
                }
            }

        },

        {
            type: "input",
            name: "id",
            message: 'What is his/her id number?',
            // Check if user entered something
            validate: id => {
                if (id) {
                    return true
                } else {
                    console.log('Please enter an id number');
                    return false;
                }
            }
        },

        {
            type: "input",
            name: "email",
            message: 'What is his/her email?',
            // Check if user entered something
            validate: email => {
                if (email) {
                    return true
                } else {
                    console.log('Please enter an email');
                    return false;
                }
            }
        },

        {
            type: "input",
            name: "school",
            message: 'What school does he/she go to?',
            // Check if user entered something
            validate: school => {
                if (school) {
                    return true
                } else {
                    console.log('Please enter a school');
                    return false;
                }
            }
        }
    ]).then(answers => {
        // console.log(answers);
        const intern = new Intern(answers.name, answers.id, answers.email, answers.school);
        // Pushes the new manager object to the team array
        teamArray.push(intern);
        // Call menu
        promptTeamBuilder();
    });
};

const finishTeam = () => {
    console.log(teamArray);
}

promptUser();