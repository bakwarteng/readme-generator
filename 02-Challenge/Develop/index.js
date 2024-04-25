// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");

// TODO: Create an array of questions for user input
const generateMarkdown = require("./utils/generateMarkdown.js");

// TODO: Create a function to write README file

function writeToFile(readme, data) {
  fs.writeFile(readme, data, (err) =>
    err ? console.log(err) : console.log("Successfully created readme file.")
  );
}

// TODO: Create a function to initialize app
function init() {
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
        name: "installation",
        message: "Provide installation instructions",
      },

      {
        type: "input",
        name: "usage",
        message: "How is your product used?",
      },

      {
        type: "input",
        name: "contributing",
        message: "Describe how to contribute",
      },

      {
        type: "input",
        name: "tests",
        message: "Describe how the application can be tested.",
      },

      { type: "list", name: "license", choices: [" MIT ", " Apache", "Boost"] },
    ])
    .then((data) => {
      console.log(data, "Hello");
      const readMEpageContent = generateMarkdown(data);
      writeToFile("./readme.md", readMEpageContent);
    });
}

init();
