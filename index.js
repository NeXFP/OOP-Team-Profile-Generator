const generateIndex = require('./src/pagetemplate');

const Manager = require("./lib/Manager.js");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const inquirer = require("inquirer");
const fs = require('fs');

const teamArray = [];

//Questions for Manager

const managerQuestions = async () => {
    const managerInput = await inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is the manager's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the manager's ID?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the manager's office number?"
        },
        {
            type: "input",
            name: "email",
            message: "Which email does the manager use?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the Github username that the manager would like to use?"
        }
    ]);
    const { name, id, email, officeNumber, github } = managerInput;
    const manager = new Manager(name, id, email, officeNumber, github);
    teamArray.push(manager);
    console.log(manager);
};

const addEmployee = () => {
    console.log(`Adding employees to your team!`);
    return inquirer.prompt([
        {
            type: "list",
            name: "role",
            message: "Select the roll of your employee.",
            choices: ["Engineer", "Intern"]
        },
        {
            type: "input",
            name: "name",
            message: "What is the employee's name?"
        },
        {
            type: "input",
            name: "id",
            message: "What is the employee's ID?"
        },
        {
            type: "input",
            name: "officeNumber",
            message: "What is the employee's office number?"
        },
        {
            type: "input",
            name: "email",
            message: "Which email does the employee use?"
        },
        {
            type: "input",
            name: "github",
            message: "What is the Github username that the employee would like to use?"
        },
        {
            type: "confirm",
            name: "confirmEmployee",
            message: "Would you like to add anymore team members?",
            default: false
        }
    ])
        .then(employeeData => {
            let { name, role, id, email, officeNumber, github, confirmEmployee } = employeeData;
            let employee;

            if (role === "Engineer") {
                employee = new Engineer(name, id, email, officeNumber, github);

                console.log(employee);

            } else if (role === "Intern") {
                employee = new Intern(name, id, email, officeNumber, github);

                console.log(employee);
            }

            teamArray.push(employee);

            if (confirmEmployee) {
                return addEmployee(teamArray);
            } else {
                return teamArray;
            }
        })

};


const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err);
            return;
        } else {
            console.log("Your team has been successfully generated. Feel free to take a look at index.html")
        }
    })
};

managerQuestions()
    .then(addEmployee)
    .then(teamArray => {
        return generateIndex(teamArray);
    })
    .then(pageHTML => {
        console.log(pageHTML)
        return writeFile(pageHTML);
    })

    .catch(err => {
        console.log(err);
    });