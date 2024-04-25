// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input

const generateMarkdown = require("./utils/generateMarkdown");
const { default: Choices } = require("inquirer/lib/objects/choices");
const data = [
  { title, description:"", installation:, usage, license, contributing, tests },
];

// TODO: Create a function to write README file

function writeToFile(readme, data) {
  fs.writeFile(readme, generateMarkdown(data), (err) =>
    err ? console.log(err) : console.log("Successfully created readme file.")
  );
}

// TODO: Create a function to initialize app
function init(data) {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "Enter the title of your application",
      },

      {
        type: "input",
        name: "description",
        message: "Describe your application",
      },

      {
        type: "input",
        name: "usage information",
        message: "How is your product used?",
      },

      {
        type: "input",
        name: "Contributing",

        type: "input",
        name: "Tests",
      },

      { type: "list", name: "license", choices: [" MIT ", " Apache", "Boost"] },
    ])
    .then((data) => {
      const readMEpageContent = generateREADME(data);
    });
}

// Function call to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    console.log(data);
    fs.writeFile(
      `${questions.answers}.json`,
      JSON.stringify(answers, null, 2),
      "utf-8",
      (err) => {
        err
          ? console.log("Please answer all questions")
          : console.log("Thank you for creating a README");
      }
    );
  });

  init();
}
