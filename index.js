const inquirer = require("inquirer");
const {writeFile} = require("./utils/generateHTML");
const generateIndexHTML = require("./src/htmlTemplate");


//Questions for Manager

const managerQuestions = [
    {
        type:"input",
        name:"managerName",
        message:"What is the manager's name?"
    },
    {
        type:"input",
        name:"managerId",
        message:"What is the manager's ID?"
    },
    {
        type:"input",
        name:"managerNumber",
        message:"What is the manager's office number?"
    },
    {
        type:"input",
        name:"managerEmail",
        message:"Which email does the manager use?"
    },
    {
        type:"list",
        name:"engineerAdd",
        choices:["Yes", "No"],
        message: "Would you like to add an engineer?"
    }
];