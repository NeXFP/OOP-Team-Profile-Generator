const inquirer = require("inquirer");
const fs = require('fs');
const teamComposition = require("./src/pagetemplate");

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
        name:"officeNumber",
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
    }
];

//Questions for Engineers

const engineerQuestions = [
    {
        type:"input",
        name:"name",
        message:"What is the engineer's name?"
    },
    {
        type:"input",
        name:"id",
        message:"What is the engineer's ID?"
    },
    {
        type:"input",
        name:"officeNumber",
        message:"What is the engineer's office number?"
    },
    {
        type:"input",
        name:"email",
        message:"Which email does the engineer use?"
    },
    {
        type:"input",
        name:"github",
        message:"What is the Github username that the engineer would like to use?"
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
        name:"officeNumber",
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
            teamComposition();
    }
    })
}
//Function to prompt a manager
function managerPrompt() {
    inquirer.prompt(managerQuestions).then((response) => {

        let name = response.name;
        let id = response.id;
        let email = response.email;
        let office = response.officeNumber;
        let github = response.github;

        //Creates object for manager
        const manager = new manager(name, id, email, office, github);
        teamArray.push(manager);
        console.log(teamArray);

        nextEmployee();
    })
}

//Function to prompt an Engineer
function engineerPrompt(){
    inquirer.prompt(engineerQuestions).then((response) => {
        let name = response.name;
        let id = response.id;
        let email = response.email;
        let office = response.officeNumber;
        let github = response.github;

        //Creates object for engineer
        const engineer = new engineer (name, id, email, office, github);
        teamArray.push(engineer);
        console.log(teamArray);

        //This calls back to the function to prompt users to select the next employee type they would like to add!
        nextEmployee();
    })
}

//Function to prompt an Intern
function internPrompt(){
    inquirer.prompt(engineerQuestions).then((response) => {
        let name = response.name;
        let id = response.id;
        let email = response.email;
        let office = response.officeNumber;
        let github = response.github;

        //Creates object for intern
        const intern = new intern (name, id, email, office, github);
        teamArray.push(intern);
        console.log(teamArray);

        //This calls back to the function to prompt users to select the next employee type they would like to add!
        nextEmployee();
    })
}

function teamComposition() {
    fs.writeFile(outputPath, render(teamArray), function(err){
        if (err){
            return console.log(err)
        }
    })
}

init();