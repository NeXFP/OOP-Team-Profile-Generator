const inquirer = require("inquirer");
const fs = require('fs');
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateIndexHTML = require("./src/htmlTemplate");

const teamArray = [];

//Questions for Manager

const managerQuestions = [
    {
        type:"input",
        name:"name",
        message:"What is the manager's name?"
    },
    {
        type:"input",
        name:"id",
        message:"What is the manager's ID?"
    },
    {
        type:"input",
        name:"number",
        message:"What is the manager's office number?"
    },
    {
        type:"input",
        name:"email",
        message:"Which email does the manager use?"
    },
    {
        type:"input",
        name:"github",
        message:"What is the Github username that the manager would like to use?"
    },
    {
        type:"list",
        name:"engineerAdd",
        choices:["Yes", "No"],
        message: "Would you like to add an engineer?"
    }
];

//Questions for Engineers

const engineerQuestions = [
    {
        type:"input",
        name:"engineerName",
        message:"What is the engineer's name?"
    },
    {
        type:"input",
        name:"engineerId",
        message:"What is the engineer's ID?"
    },
    {
        type:"input",
        name:"engineerNumber",
        message:"What is the engineer's office number?"
    },
    {
        type:"input",
        name:"engineerEmail",
        message:"Which email does the engineer use?"
    },
    {
        type:"input",
        name:"engineerGithub",
        message:"What is the Github username that the engineer would like to use?"
    },
    {
        type:"list",
        name:"internAdd",
        choices:["Yes", "No"],
        message: "Would you like to add an intern?"
    }
];

//Questions for Interns

const internQuestions = [
    {
        type:"input",
        name:"name",
        message:"What is the intern's name?"
    },
    {
        type:"input",
        name:"id",
        message:"What is the intern's ID?"
    },
    {
        type:"input",
        name:"number",
        message:"What is the interns's office number?"
    },
    {
        type:"input",
        name:"email",
        message:"Which email does the intern use?"
    },
    {
        type:"input",
        name:"github",
        message:"What is the Github username that the intern would like to use?"
    }
];
//Prompts User if they'd like to add another employee to the team.
const anotherOne = [
    {
        type: "list",
        name: "nextMember",
        message: "Select the type of team member you would like to add next, if you are done select 'Done' to generate your team. ",
        choices: ['Engineer', 'Intern', 'Done']
    }
];

//Function to prompt that each team will have a manager and begin with the manager function

function init(){
    managerPrompt();
}


//Function that will prompt the user to select the next employee type that they will be adding to their team

function nextEmployee() {
    inquirer.prompt(anotherOne).then((response) => {
    console.log(response);
    switch (response.nextMember) {
        case "Engineer":
            engineerPrompt();
        case "Intern":
            internPrompt();
        case "Done":
            console.log("Generating your team currently!")
            makeTeam();
    }
    })
}

function managerPrompt() {
    inquirer.prompt(managerQuestions).then((response) => {

        let name = response.managerName;
        let id = response.managerID;
        let email = response.managerEmail;
        let office = response.office;
        let github = response.github;

        const manager = new Manager(name, id, email, office, github);
        teamArray.push(manager);
        console.log(teamArray);

        next();
    })
}

function engineerPrompt(){
    inquirer.prompt(engineerQuestions).then((response) => {
        let name = response.engineerName;
        let id = response.engineerId;
        let email = response.engineerEmail;
        let office = response.engineerNumber;
        let github = response.engineerGithub;

        const engineer = new Engineer (name, id, email, office, github);
        teamArray.push(engineer);
        console.log(teamArray);
        
        //This calls back to the function to prompt users to select the next employee type they would like to add!
        next();
    })
}