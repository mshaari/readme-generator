// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    var licenseBadge = `https://img.shields.io/badge/license-${license}-blue`;
    return licenseBadge;
  } else {
    return;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    var licenseLink = `https://choosealicense.com/licenses/${license}`
  } else {
    return;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    `![License Badge](${renderLicenseBadge(data.license)});
    This application is created using the following license (click to learn more): [${license}](${renderLicenseLink(license)}).`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  
  ## Licensing Badge
  ![License Badge](${renderLicenseBadge(data.license)});

  ## Table of Contents
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [License](#license)
  * [Questions](#questions)

  ## Description
  ${data.description}

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Contributing
  ${data.contribution}

  ## Tests
  ${data.testInstructions}

  ## License
  ${renderLicenseSection(data.license)};

  ## Questions
  Please visit my GitHub profile at [${data.githubUsename}](https://github.com/${data.githubUsename}). If you have additional questions, please email me at ${data.email}.`;
}

module.exports = generateMarkdown;