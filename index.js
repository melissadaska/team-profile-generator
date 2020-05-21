const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/engineer")
const Manager = require("./lib/manager")
const Intern = require("./lib/intern")

const teamMembers = [];

async function init() {
    const manager = await addManager();
    teamMembers.push(new Manager(manager.name, manager.id, manager.email, manager.officeNumber));
    addEmployees();
}

init();

function addManager() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter your name.",
        },
        {
            type: "number",
            name: "id",
            message: "What is your manager id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email address?",
        },
        {
            type: "number",
            name: "officeNumber",
            message: "What is your office number?",
        }
    ])
        .then(function(manager) {
            teamMembers.push(new Manager(manager.name, manager.id, manager.email, manager.officeNumber));
            addEmployees();
        });
};

function addEmployees() {
    inquirer.prompt([
        {
            type: "list",
            name: "employee",
            message: "What employee would you like to create?",
            choices: [
                "Intern",
                "Engineer"
            ]
        }
    ])
        .then(employeeData => {
            if (employeeData.employee === "Intern") {
                createIntern();
            } else if (employeeData.employee === "Engineer") {
                createEngineer();
            } else {
                // call render teamMembersArray to generate HTML
            }
        });
};

function createEngineer() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your engineer's name?"
        },
        {
            type: "number",
            name: "id",
            message: "What is your engineer's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your engineer's email?"
        },
        {
            type: "input",
            name: "github",
            message: "What is your engineer's GitHub username?"
        }
    ])
        .then(function(engineer) {
            teamMembers.push(new Engineer(engineer.name, engineer.id, engineer.email, engineer.github));
            addEmployees();
        });
};

function createIntern() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "What is your intern's name?"
        },
        {
            type: "number",
            name: "id",
            message: "What is your intern's id?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your intern's email?"
        },
        {
            type: "input",
            name: "school",
            message: "What is your intern's school?"
        }
    ])
        .then(function(intern) {
            teamMembers.push(new Intern(intern.name, intern.id, intern.email, intern.school));
            addEmployees();
        });
};
