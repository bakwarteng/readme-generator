// Function to render license badge based on license type
function renderLicenseBadge(license) {
  switch (license) {
    case "MIT":
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    case "Apache-2.0":
      return `[![License: Apache 2.0](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://www.apache.org/licenses/LICENSE-2.0)`;
    case "Boost":
      return `[![License: Boost 1.0](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
    default:
      return "";
  }
}

// Function to render license link based on license type
function renderLicenseLink(license) {
  const licenses = {
    MIT: "https://opensource.org/licenses/MIT",
    "Apache-2.0": "https://www.apache.org/licenses/LICENSE-2.0",
    Boost: "https://www.boost.org/users/license.html",
  };
  return licenses[license] || "";
}

// Function to render license section of README
function renderLicenseSection(license) {
  if (license) {
    return `
## License

This project is licensed under the ${license} license. Click [here](${renderLicenseLink(
      license
    )}) for more information.

${renderLicenseBadge(license)}
    `;
  } else {
    return "";
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  // Table of Contents
  let tableOfContents = `
## Table of Contents
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#Contributing)
- [Tests](#Tests)
- [License](#License)

`;

  // Add License to Table of Contents if license is selected
  if (data.license) {
    tableOfContents += `- [License](#license)\n`;
  }

  // Add Contributing to Table of Contents if contributing section is provided
  if (data.contributing) {
    tableOfContents += `- [Contributing](#contributing)\n`;
  }

  // Add Tests to Table of Contents if tests section is provided
  if (data.tests) {
    tableOfContents += `- [Tests](#tests)\n`;
  }

  // Generate README content
  let readmeContent = `
# ${data.title}

${tableOfContents}

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}
`;

  // Add License section if license is selected
  if (data.license) {
    readmeContent += `
## License
This project is licensed under the ${data.license} license. Click [here](${renderLicenseLink(
      data.license
    )}) for more information.

${renderLicenseBadge(data.license)}
`;
  }

  // Add Contributing section if provided
  if (data.contributing) {
    readmeContent += `
## Contributing
${data.contributing}
`;
  }

  // Add Tests section if provided
  if (data.tests) {
    readmeContent += `
## Tests
${data.tests}
`;
  }

if (data.github) {
  readmeContent += `
## Questions
For questions about this project, please contact [${data.github}](https://github.com/${data.github}).
`;
}


  return readmeContent;
}

module.exports = generateMarkdown;



 

