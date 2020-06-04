const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js");
const fs = require("fs");
// array of questions for user
const questions = [

    "Title of the project:",
    "Description of the project:",
    "Table of Contents:",
    "Installation:",
    "Usage:",
    "License:",
    "Contributing:",
    "Tests:",
    "Questions"
];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName, data, function (error) {

        if (error) {
            console.log(error);
        }

    });
}

// function to initialize program
function init() {

    inquirer.prompt([
        {
            type: "input",
            name: "title",
            message: questions[0]
        },
        {
            type: "input",
            name: "description",
            message: questions[1]

        },
        {

            type: "checkbox",
            name: "table_of_contents",
            message: questions[2],
            choices: [
                `Description`,
                `Installation`,
                `Usage`,
                `Contributing`,
                `Test`,
                `License`
            ]

        },
        {
            type: "confirm",
            name: "notice",
            message: "Next question is about installation, if you have more than one sentence use comma (,) to seperate between every command"
        },
        {

            type: "input",
            name: "installation",
            message: questions[3],

        },
        {

            type: "input",
            name: "usage",
            message: questions[4],
            default: `
            inquirer.prompt([
                {
                    type: "input",
                    name: "title",
                    message: questions[0]
                },
            ]).then(res=>console.log(res)) // output:Your Title for the project
              .catch(err =>console.log(err)) //output:If there is any Error
            `

        },
        {

            type: "list",
            name: "license",
            message: questions[5],
            choices: [
                "MIT",
                "ISC",
                "Unlicense"
            ]
        },
        {

            type: "input",
            name: "contributing",
            message: questions[6],
            default: "None"

        },

        {

            type: "input",
            name: "tests",
            message: questions[7],
            default: "None"

        },
        {
            type: "input",
            name: "userName",
            message: "What is your Github user name?"
        },
        {
            type: "input",
            name: "email",
            message: "What is your email?"
        },

    ]).then(res => {

        const data = res;
        const generateData = generateMarkdown(data);
        writeToFile("README.md", generateData);
    }).catch((err) => console.log(err));

}

// function call to initialize program
init();
