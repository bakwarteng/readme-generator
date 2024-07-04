// Required packages
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown"); // Assuming generateMarkdown.js is correctly implemented in ./utils

// Array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "Enter the title of your application:",
  },
  {
    type: "input",
    name: "description",
    message: "Describe your application:",
  },
  {
    type: "input",
    name: "installation",
    message: "Provide installation instructions:",
  },
  {
    type: "input",
    name: "usage",
    message: "How is your product used?",
  },
  {
    type: "input",
    name: "contributing",
    message: "Describe how to contribute:",
  },
  {
    type: "input",
    name: "tests",
    message: "Describe how the application can be tested:",
  },
  {
    type: "list",
    name: "license",
    message: "Choose a license for your application:",
    choices: ["MIT", "Apache", "Boost", "None"],
  },
  {type: "input",
    name: "github",
    message: "Enter your Github username:"

  }
];

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log("README.md successfully generated!");
    }
  });
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    const readmeContent = generateMarkdown(data);
    writeToFile("./README.md", readmeContent);
  });
}

// Initialize the application
init();
