const inquirer = require("inquirer");
const fs = require("fs");

const Engineer = require("./lib/engineer")
const Manager = require("./lib/manager")
const Intern = require("./lib/intern")

const teamMembers = [];


function init() {
    initializeHTML();
    addMember();
};

function addMember() {
    inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Please enter team member's name.",
        },
        {
            type: "list",
            name: "role",
            message: "Please select team member's role.",
            choices: [
                "Engineer",
                "Intern",
                "Manager"
            ]
        },
        {
            type: "number",
            name: "id",
            message: "Please enter team member's id."
        },
        {
            type: "input",
            name: "email",
            message: "Please enter team member's email address."
        }

    ])
        .then(function(name, role, id, email) {
            let roleInfo = "";
            if (role === "Engineer") {
                roleInfo = "GitHub username";
            } else if (role === "Intern") {
                roleInfo = "school name";
            } else {
                roleInfo = "office number";
            }
            inquirer.prompt([{
                name: "roleInfo",
                message: `Enter team member's ${roleInfo}`,
            },
            {
                type: "list",
                name: "addMembers",
                message: "Would you like to add more team members?",
                choices: [
                    "yes",
                    "no"
                ],
            }])
            .then(function({roleInfo, addMembers}) {
                let newMember;
                if (role === "Engineer" {
                    newMember = new Engineer(name, id, email, roleInfo);
                } else if (role === "Intern") {
                    new Member = new Intern(name, id, email, roleInfo);
                } else {
                    new Member = new Manager(name, id, email, roleInfo);
                }
                teamMembers.push(newMember);
                addHTML(newMember)
                .then(function() {
                    if (addMembers === "yes") {
                        addMember();
                    } else {
                        // call finalizeHTML()
                    }
                })
            })
        })
};

// add initialize HTML function
function initializeHTML() {
    const html = 
    `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <title>Team Profile</title>
    </head>
    <body>
        <nav class="navbar navbar-dark bg-dark mb-5">
            <span class="navbar-brand mb-0 h1 w-100 text-center">Team Profile</span>
        </nav>
        <div class="container">
            <div class="row">`;
    fs.writeFile("./output/teamprofile.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
}


// add function that adds each member to HTML

// add function to finalizeHTML

init();





