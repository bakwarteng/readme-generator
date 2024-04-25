// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "Apache":
      return `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

    case "Boost":
      return `[ [![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)]`;

    default:
      return "";
  }
}

// when the time comes call back data.license down below in the next funtion

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  const licenses = {
    MIT: "https://opensource.org/licenses/MIT ",
    "Apache-2.0": "https://www.apache.org/licenses/LICENSE-2.0",
    Boost: "https://www.boost.org/users/license.html",
  };
  return licenses[license] || "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
## License

This project is licensed under the ${license} license. Click [here](${renderLicenseLink(
      license
    )}) for more information.
    `;
  } else {
    return "";
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  ## title
  ${data.title}

  # description
${data.description}

## installation
${data.installation}

## usage
${data.usage}


## license
${data.license},

## contributing
  ${data.contributing},

## tests
  ${data.tests}


  

${renderLicenseSection(data.license)}

`;
}

module.exports = generateMarkdown();
